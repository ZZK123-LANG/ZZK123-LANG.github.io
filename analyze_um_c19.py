#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
UM_C19_2021.csv 数据分析脚本
分析密歇根大学2021年COVID-19检测数据
"""

import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from datetime import datetime
import numpy as np

# 设置中文字体支持
plt.rcParams['font.sans-serif'] = ['SimHei', 'Microsoft YaHei', 'Arial Unicode MS']
plt.rcParams['axes.unicode_minus'] = False

def load_and_explore_data():
    """加载和探索数据"""
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
        return None
    except Exception as e:
        print(f"❌ 读取文件时出错: {e}")
        return None
    
    return df

def basic_info_analysis(df):
    """基本信息分析"""
    print("📋 基本信息分析")
    print("-" * 40)
    
    # 数据概览
    print("🔍 数据概览:")
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
    
    # 缺失值检查
    print("🔍 缺失值检查:")
    missing_data = df.isnull().sum()
    if missing_data.sum() == 0:
        print("✅ 无缺失值")
    else:
        print(missing_data[missing_data > 0])
    print()

def data_processing(df):
    """数据处理"""
    print("🔧 数据处理")
    print("-" * 40)
    
    # 转换日期格式
    df['Date'] = pd.to_datetime(df['Date'])
    
    # 添加新列
    df['Total_Tests'] = df['Positive'] + df['Negative']
    df['Positive_Rate'] = (df['Positive'] / df['Total_Tests'] * 100).round(2)
    df['Year'] = df['Date'].dt.year
    df['Month'] = df['Date'].dt.month
    df['Day'] = df['Date'].dt.day
    df['Weekday'] = df['Date'].dt.day_name()
    
    print("✅ 数据处理完成")
    print(f"📅 数据时间范围: {df['Date'].min().strftime('%Y-%m-%d')} 到 {df['Date'].max().strftime('%Y-%m-%d')}")
    print()
    
    return df

def category_analysis(df):
    """分类分析"""
    print("📊 分类分析")
    print("-" * 40)
    
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
    
    # 组合分析
    print("🔗 类型与居住情况组合分析:")
    combined_analysis = df.groupby(['Type', 'residence']).agg({
        'Positive': 'sum',
        'Negative': 'sum',
        'Total_Tests': 'sum',
        'Positive_Rate': 'mean'
    }).round(2)
    print(combined_analysis)
    print()

def time_series_analysis(df):
    """时间序列分析"""
    print("📈 时间序列分析")
    print("-" * 40)
    
    # 按日期汇总
    daily_summary = df.groupby('Date').agg({
        'Positive': 'sum',
        'Negative': 'sum',
        'Total_Tests': 'sum',
        'Positive_Rate': 'mean'
    }).round(2)
    
    print("📅 每日汇总统计:")
    print(daily_summary.head(10))
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
    
    # 按星期几分析
    weekday_analysis = df.groupby('Weekday').agg({
        'Positive': 'sum',
        'Negative': 'sum',
        'Total_Tests': 'sum',
        'Positive_Rate': 'mean'
    }).round(2)
    
    print("📅 按星期几分析:")
    print(weekday_analysis)
    print()
    
    return daily_summary, monthly_summary, weekday_analysis

def statistical_analysis(df):
    """统计分析"""
    print("📊 统计分析")
    print("-" * 40)
    
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

def create_visualizations(df, daily_summary, monthly_summary, weekday_analysis):
    """创建可视化图表"""
    print("📊 创建可视化图表")
    print("-" * 40)
    
    # 设置图表样式
    plt.style.use('seaborn-v0_8')
    fig = plt.figure(figsize=(20, 15))
    
    # 1. 每日阳性率趋势
    plt.subplot(3, 3, 1)
    plt.plot(daily_summary.index, daily_summary['Positive_Rate'], linewidth=2, color='red')
    plt.title('每日阳性率趋势', fontsize=14, fontweight='bold')
    plt.xlabel('日期')
    plt.ylabel('阳性率 (%)')
    plt.xticks(rotation=45)
    plt.grid(True, alpha=0.3)
    
    # 2. 每月检测数量
    plt.subplot(3, 3, 2)
    months = monthly_summary.index
    width = 0.35
    plt.bar(months - width/2, monthly_summary['Positive'], width, label='阳性', color='red', alpha=0.7)
    plt.bar(months + width/2, monthly_summary['Negative'], width, label='阴性', color='green', alpha=0.7)
    plt.title('每月检测数量', fontsize=14, fontweight='bold')
    plt.xlabel('月份')
    plt.ylabel('检测数量')
    plt.legend()
    plt.grid(True, alpha=0.3)
    
    # 3. 按人员类型分析
    plt.subplot(3, 3, 3)
    type_data = df.groupby('Type').agg({'Positive': 'sum', 'Negative': 'sum'})
    labels = type_data.index
    sizes = type_data['Positive']
    colors = ['#ff9999', '#66b3ff']
    plt.pie(sizes, labels=labels, autopct='%1.1f%%', colors=colors, startangle=90)
    plt.title('按人员类型阳性分布', fontsize=14, fontweight='bold')
    
    # 4. 按居住情况分析
    plt.subplot(3, 3, 4)
    residence_data = df.groupby('residence').agg({'Positive': 'sum', 'Negative': 'sum'})
    residence_data.plot(kind='bar', color=['red', 'green'], alpha=0.7)
    plt.title('按居住情况检测结果', fontsize=14, fontweight='bold')
    plt.xlabel('居住情况')
    plt.ylabel('检测数量')
    plt.xticks(rotation=45)
    plt.legend(['阳性', '阴性'])
    
    # 5. 星期几分析
    plt.subplot(3, 3, 5)
    weekday_order = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    weekday_data = weekday_analysis.reindex(weekday_order)
    plt.plot(range(len(weekday_data)), weekday_data['Positive_Rate'], marker='o', linewidth=2, markersize=8)
    plt.title('按星期几阳性率', fontsize=14, fontweight='bold')
    plt.xlabel('星期')
    plt.ylabel('阳性率 (%)')
    plt.xticks(range(len(weekday_data)), weekday_data.index, rotation=45)
    plt.grid(True, alpha=0.3)
    
    # 6. 检测数量分布
    plt.subplot(3, 3, 6)
    plt.hist(df['Total_Tests'], bins=30, color='skyblue', alpha=0.7, edgecolor='black')
    plt.title('检测数量分布', fontsize=14, fontweight='bold')
    plt.xlabel('检测数量')
    plt.ylabel('频次')
    plt.grid(True, alpha=0.3)
    
    # 7. 阳性率分布
    plt.subplot(3, 3, 7)
    plt.hist(df['Positive_Rate'], bins=30, color='lightcoral', alpha=0.7, edgecolor='black')
    plt.title('阳性率分布', fontsize=14, fontweight='bold')
    plt.xlabel('阳性率 (%)')
    plt.ylabel('频次')
    plt.grid(True, alpha=0.3)
    
    # 8. 热力图：类型vs居住情况
    plt.subplot(3, 3, 8)
    pivot_data = df.pivot_table(values='Positive_Rate', index='Type', columns='residence', aggfunc='mean')
    sns.heatmap(pivot_data, annot=True, cmap='YlOrRd', fmt='.2f')
    plt.title('类型vs居住情况阳性率热力图', fontsize=14, fontweight='bold')
    
    # 9. 累计检测趋势
    plt.subplot(3, 3, 9)
    daily_summary['Cumulative_Tests'] = daily_summary['Total_Tests'].cumsum()
    daily_summary['Cumulative_Positive'] = daily_summary['Positive'].cumsum()
    plt.plot(daily_summary.index, daily_summary['Cumulative_Tests'], label='累计检测', linewidth=2)
    plt.plot(daily_summary.index, daily_summary['Cumulative_Positive'], label='累计阳性', linewidth=2)
    plt.title('累计检测趋势', fontsize=14, fontweight='bold')
    plt.xlabel('日期')
    plt.ylabel('累计数量')
    plt.legend()
    plt.xticks(rotation=45)
    plt.grid(True, alpha=0.3)
    
    plt.tight_layout()
    plt.savefig('UM_C19_2021_Analysis.png', dpi=300, bbox_inches='tight')
    print("✅ 图表已保存为 'UM_C19_2021_Analysis.png'")
    plt.show()

def export_results(df, daily_summary, monthly_summary, weekday_analysis):
    """导出分析结果"""
    print("💾 导出分析结果")
    print("-" * 40)
    
    # 导出处理后的数据
    df.to_csv('UM_C19_2021_Processed.csv', index=False)
    print("✅ 处理后的数据已保存为 'UM_C19_2021_Processed.csv'")
    
    # 导出每日汇总
    daily_summary.to_csv('UM_C19_2021_Daily_Summary.csv')
    print("✅ 每日汇总已保存为 'UM_C19_2021_Daily_Summary.csv'")
    
    # 导出每月汇总
    monthly_summary.to_csv('UM_C19_2021_Monthly_Summary.csv')
    print("✅ 每月汇总已保存为 'UM_C19_2021_Monthly_Summary.csv'")
    
    # 导出星期几分析
    weekday_analysis.to_csv('UM_C19_2021_Weekday_Analysis.csv')
    print("✅ 星期几分析已保存为 'UM_C19_2021_Weekday_Analysis.csv'")

def main():
    """主函数"""
    print("🚀 开始分析 UM_C19_2021.csv 文件...")
    print()
    
    # 1. 加载数据
    df = load_and_explore_data()
    if df is None:
        return
    
    # 2. 基本信息分析
    basic_info_analysis(df)
    
    # 3. 数据处理
    df = data_processing(df)
    
    # 4. 分类分析
    category_analysis(df)
    
    # 5. 时间序列分析
    daily_summary, monthly_summary, weekday_analysis = time_series_analysis(df)
    
    # 6. 统计分析
    statistical_analysis(df)
    
    # 7. 创建可视化
    try:
        create_visualizations(df, daily_summary, monthly_summary, weekday_analysis)
    except Exception as e:
        print(f"⚠️ 创建图表时出错: {e}")
        print("请确保已安装 matplotlib 和 seaborn: pip install matplotlib seaborn")
    
    # 8. 导出结果
    export_results(df, daily_summary, monthly_summary, weekday_analysis)
    
    print()
    print("=" * 60)
    print("🎉 分析完成！")
    print("📁 生成的文件:")
    print("   - UM_C19_2021_Processed.csv (处理后的数据)")
    print("   - UM_C19_2021_Daily_Summary.csv (每日汇总)")
    print("   - UM_C19_2021_Monthly_Summary.csv (每月汇总)")
    print("   - UM_C19_2021_Weekday_Analysis.csv (星期几分析)")
    print("   - UM_C19_2021_Analysis.png (可视化图表)")
    print("=" * 60)

if __name__ == "__main__":
    main()

