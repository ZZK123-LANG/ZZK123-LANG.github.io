#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
UM_C19_2021.csv 数据分析脚本 - 简化版
分析密歇根大学2021年COVID-19检测数据
"""

import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

def main():
    """主函数"""
    print("=" * 60)
    print("密歇根大学 COVID-19 检测数据分析")
    print("=" * 60)
    
    # 读取CSV文件
    try:
        df = pd.read_csv('UM_C19_2021.csv')
        print(f"✅ 成功加载数据，共 {len(df)} 行记录")
        print(f"📊 数据列: {list(df.columns)}")
        print()
    except FileNotFoundError:
        print("❌ 错误：找不到 UM_C19_2021.csv 文件")
        return
    except Exception as e:
        print(f"❌ 读取文件时出错: {e}")
        return
    
    # 数据概览
    print("📋 数据概览:")
    print(df.info())
    print()
    
    # 前几行数据
    print("📄 前5行数据:")
    print(df.head())
    print()
    
    # 基本统计信息
    print("📈 数值列统计信息:")
    print(df.describe())
    print()
    
    # 数据处理
    df['Date'] = pd.to_datetime(df['Date'])
    df['Total_Tests'] = df['Positive'] + df['Negative']
    df['Positive_Rate'] = (df['Positive'] / df['Total_Tests'] * 100).round(2)
    df['Year'] = df['Date'].dt.year
    df['Month'] = df['Date'].dt.month
    df['Weekday'] = df['Date'].dt.day_name()
    
    print("🔧 数据处理完成")
    print(f"📅 数据时间范围: {df['Date'].min().strftime('%Y-%m-%d')} 到 {df['Date'].max().strftime('%Y-%m-%d')}")
    print()
    
    # 按类型分析
    print("👥 按人员类型分析:")
    type_analysis = df.groupby('Type').agg({
        'Positive': 'sum',
        'Negative': 'sum',
        'Total_Tests': 'sum',
        'Positive_Rate': 'mean'
    }).round(2)
    print(type_analysis)
    print()
    
    # 按居住情况分析
    print("🏠 按居住情况分析:")
    residence_analysis = df.groupby('residence').agg({
        'Positive': 'sum',
        'Negative': 'sum',
        'Total_Tests': 'sum',
        'Positive_Rate': 'mean'
    }).round(2)
    print(residence_analysis)
    print()
    
    # 按月份汇总
    monthly_summary = df.groupby('Month').agg({
        'Positive': 'sum',
        'Negative': 'sum',
        'Total_Tests': 'sum',
        'Positive_Rate': 'mean'
    }).round(2)
    
    print("📆 每月汇总统计:")
    print(monthly_summary)
    print()
    
    # 总体统计
    total_positive = df['Positive'].sum()
    total_negative = df['Negative'].sum()
    total_tests = df['Total_Tests'].sum()
    overall_positive_rate = (total_positive / total_tests * 100)
    
    print(f"🔢 总体统计:")
    print(f"   总检测数: {total_tests:,}")
    print(f"   阳性数: {total_positive:,}")
    print(f"   阴性数: {total_negative:,}")
    print(f"   总体阳性率: {overall_positive_rate:.2f}%")
    print()
    
    # 最高和最低阳性率
    max_rate_idx = df['Positive_Rate'].idxmax()
    min_rate_idx = df['Positive_Rate'].idxmin()
    
    print(f"📈 阳性率极值:")
    print(f"   最高阳性率: {df.loc[max_rate_idx, 'Positive_Rate']:.2f}%")
    print(f"   日期: {df.loc[max_rate_idx, 'Date'].strftime('%Y-%m-%d')}")
    print(f"   类型: {df.loc[max_rate_idx, 'Type']}")
    print(f"   居住: {df.loc[max_rate_idx, 'residence']}")
    print()
    
    print(f"📉 最低阳性率: {df.loc[min_rate_idx, 'Positive_Rate']:.2f}%")
    print(f"   日期: {df.loc[min_rate_idx, 'Date'].strftime('%Y-%m-%d')}")
    print(f"   类型: {df.loc[min_rate_idx, 'Type']}")
    print(f"   居住: {df.loc[min_rate_idx, 'residence']}")
    print()
    
    # 创建简单图表
    try:
        fig, axes = plt.subplots(2, 2, figsize=(15, 10))
        
        # 1. 每月检测数量
        monthly_summary[['Positive', 'Negative']].plot(kind='bar', ax=axes[0,0], color=['red', 'green'], alpha=0.7)
        axes[0,0].set_title('Monthly Test Results')
        axes[0,0].set_xlabel('Month')
        axes[0,0].set_ylabel('Number of Tests')
        axes[0,0].legend(['Positive', 'Negative'])
        
        # 2. 按人员类型分析
        type_data = df.groupby('Type').agg({'Positive': 'sum', 'Negative': 'sum'})
        type_data.plot(kind='bar', ax=axes[0,1], color=['red', 'green'], alpha=0.7)
        axes[0,1].set_title('Test Results by Type')
        axes[0,1].set_xlabel('Type')
        axes[0,1].set_ylabel('Number of Tests')
        axes[0,1].legend(['Positive', 'Negative'])
        
        # 3. 按居住情况分析
        residence_data = df.groupby('residence').agg({'Positive': 'sum', 'Negative': 'sum'})
        residence_data.plot(kind='bar', ax=axes[1,0], color=['red', 'green'], alpha=0.7)
        axes[1,0].set_title('Test Results by Residence')
        axes[1,0].set_xlabel('Residence')
        axes[1,0].set_ylabel('Number of Tests')
        axes[1,0].legend(['Positive', 'Negative'])
        axes[1,0].tick_params(axis='x', rotation=45)
        
        # 4. 阳性率分布
        axes[1,1].hist(df['Positive_Rate'], bins=30, color='lightcoral', alpha=0.7, edgecolor='black')
        axes[1,1].set_title('Positive Rate Distribution')
        axes[1,1].set_xlabel('Positive Rate (%)')
        axes[1,1].set_ylabel('Frequency')
        
        plt.tight_layout()
        plt.savefig('UM_C19_2021_Analysis_Simple.png', dpi=300, bbox_inches='tight')
        print("✅ 简化图表已保存为 'UM_C19_2021_Analysis_Simple.png'")
        plt.show()
        
    except Exception as e:
        print(f"⚠️ 创建图表时出错: {e}")
    
    # 导出结果
    df.to_csv('UM_C19_2021_Processed.csv', index=False)
    print("✅ 处理后的数据已保存为 'UM_C19_2021_Processed.csv'")
    
    monthly_summary.to_csv('UM_C19_2021_Monthly_Summary.csv')
    print("✅ 每月汇总已保存为 'UM_C19_2021_Monthly_Summary.csv'")
    
    print()
    print("=" * 60)
    print("🎉 分析完成！")
    print("📁 生成的文件:")
    print("   - UM_C19_2021_Processed.csv (处理后的数据)")
    print("   - UM_C19_2021_Monthly_Summary.csv (每月汇总)")
    print("   - UM_C19_2021_Analysis_Simple.png (简化图表)")
    print("=" * 60)

if __name__ == "__main__":
    main()

