// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.2)';
    } else {
        navbar.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// 移动端菜单切换
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('active');
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 英雄区域图表
function createHeroChart() {
    const ctx = document.getElementById('heroChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            datasets: [{
                label: '投资组合收益',
                data: [100, 105, 98, 112, 108, 125, 135, 142, 138, 155, 162, 178],
                borderColor: '#ffd700',
                backgroundColor: 'rgba(255, 215, 0, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    display: true,
                    grid: {
                        color: 'rgba(255,255,255,0.1)'
                    },
                    ticks: {
                        color: 'white'
                    }
                },
                y: {
                    display: true,
                    grid: {
                        color: 'rgba(255,255,255,0.1)'
                    },
                    ticks: {
                        color: 'white'
                    }
                }
            }
        }
    });
}

// 策略图表
function createStrategyChart() {
    const ctx = document.getElementById('strategyChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            datasets: [{
                label: '策略收益',
                data: [100, 102, 105, 103, 108, 110, 112],
                borderColor: '#667eea',
                backgroundColor: 'rgba(102, 126, 234, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.4
            }, {
                label: '基准收益',
                data: [100, 101, 103, 102, 104, 105, 106],
                borderColor: '#ccc',
                backgroundColor: 'transparent',
                borderWidth: 1,
                borderDash: [5, 5]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom'
                }
            },
            scales: {
                x: {
                    display: true,
                    grid: {
                        color: '#f0f0f0'
                    }
                },
                y: {
                    display: true,
                    grid: {
                        color: '#f0f0f0'
                    }
                }
            }
        }
    });
}

// 回测图表
function createBacktestChart() {
    const ctx = document.getElementById('backtestChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2020', '2021', '2022', '2023', '2024'],
            datasets: [{
                label: '策略净值',
                data: [100000, 115000, 108000, 135000, 145000],
                borderColor: '#28a745',
                backgroundColor: 'rgba(40, 167, 69, 0.1)',
                borderWidth: 2,
                fill: true
            }, {
                label: '基准净值',
                data: [100000, 108000, 95000, 112000, 118000],
                borderColor: '#6c757d',
                backgroundColor: 'transparent',
                borderWidth: 1,
                borderDash: [5, 5]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: '策略回测结果'
                }
            },
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: '时间'
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: '净值'
                    }
                }
            }
        }
    });
}

// 策略切换功能
function showStrategy(strategyType) {
    // 更新按钮状态
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // 更新策略内容
    const strategyContent = document.getElementById('strategy-content');
    const strategies = {
        'momentum': {
            title: '动量交易策略',
            description: '基于价格动量指标的交易策略，追踪市场趋势，捕捉上涨行情。',
            metrics: {
                annualReturn: '+23.5%',
                maxDrawdown: '-8.2%',
                sharpeRatio: '1.85'
            }
        },
        'mean-reversion': {
            title: '均值回归策略',
            description: '基于价格回归均值的交易策略，在价格偏离均值时进行反向交易。',
            metrics: {
                annualReturn: '+18.2%',
                maxDrawdown: '-12.5%',
                sharpeRatio: '1.42'
            }
        },
        'arbitrage': {
            title: '套利策略',
            description: '利用市场价格差异进行无风险套利交易，获取稳定收益。',
            metrics: {
                annualReturn: '+12.8%',
                maxDrawdown: '-3.2%',
                sharpeRatio: '2.15'
            }
        },
        'ml': {
            title: '机器学习策略',
            description: '使用机器学习算法预测市场走势，自动优化交易决策。',
            metrics: {
                annualReturn: '+28.7%',
                maxDrawdown: '-15.8%',
                sharpeRatio: '1.95'
            }
        }
    };

    const strategy = strategies[strategyType];
    if (strategy) {
        strategyContent.innerHTML = `
            <div class="strategy-info">
                <h3>${strategy.title}</h3>
                <p>${strategy.description}</p>
                <div class="strategy-metrics">
                    <div class="metric">
                        <span class="metric-label">年化收益</span>
                        <span class="metric-value positive">${strategy.metrics.annualReturn}</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">最大回撤</span>
                        <span class="metric-value negative">${strategy.metrics.maxDrawdown}</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">夏普比率</span>
                        <span class="metric-value">${strategy.metrics.sharpeRatio}</span>
                    </div>
                </div>
            </div>
            <div class="strategy-chart">
                <canvas id="strategyChart"></canvas>
            </div>
        `;
        
        // 重新创建图表
        setTimeout(createStrategyChart, 100);
    }
}

// 回测功能
function runBacktest() {
    const strategy = document.getElementById('strategySelect').value;
    const timeframe = document.getElementById('timeframe').value;
    const capital = document.getElementById('initialCapital').value;

    // 模拟回测结果
    const results = {
        totalReturn: (Math.random() * 50 + 10).toFixed(1),
        annualReturn: (Math.random() * 20 + 5).toFixed(1),
        maxDrawdown: -(Math.random() * 20 + 5).toFixed(1),
        winRate: (Math.random() * 30 + 60).toFixed(1)
    };

    // 更新结果显示
    document.querySelector('.result-card:nth-child(1) .result-value').textContent = `+${results.totalReturn}%`;
    document.querySelector('.result-card:nth-child(2) .result-value').textContent = `+${results.annualReturn}%`;
    document.querySelector('.result-card:nth-child(3) .result-value').textContent = `${results.maxDrawdown}%`;
    document.querySelector('.result-card:nth-child(4) .result-value').textContent = `${results.winRate}%`;

    // 显示结果区域
    document.getElementById('backtest-results').style.display = 'block';
    
    // 重新创建图表
    setTimeout(createBacktestChart, 100);
}

// 生成投资组合数据
function generatePortfolioData() {
    const stocks = [
        {code: '000001', name: '平安银行', quantity: 1000, cost: 12.50, price: 13.20},
        {code: '000002', name: '万科A', quantity: 500, cost: 18.80, price: 19.50},
        {code: '000858', name: '五粮液', quantity: 200, cost: 158.00, price: 165.20},
        {code: '600036', name: '招商银行', quantity: 800, cost: 35.60, price: 38.90},
        {code: '600519', name: '贵州茅台', quantity: 50, cost: 1680.00, price: 1750.00}
    ];

    const tbody = document.getElementById('portfolioTable');
    if (!tbody) return;

    tbody.innerHTML = stocks.map(stock => {
        const change = ((stock.price - stock.cost) / stock.cost * 100).toFixed(2);
        const profit = ((stock.price - stock.cost) * stock.quantity).toFixed(0);
        const changeClass = change >= 0 ? 'positive' : 'negative';
        
        return `
            <tr>
                <td>${stock.code}</td>
                <td>${stock.name}</td>
                <td>${stock.quantity}</td>
                <td>¥${stock.cost.toFixed(2)}</td>
                <td>¥${stock.price.toFixed(2)}</td>
                <td class="${changeClass}">${change >= 0 ? '+' : ''}${change}%</td>
                <td class="${changeClass}">¥${change >= 0 ? '+' : ''}${profit}</td>
            </tr>
        `;
    }).join('');
}

// 按钮点击功能
function startTrading() {
    alert('欢迎开始量化交易！请先注册账户并完成风险评测。');
}

function showDemo() {
    alert('演示功能正在开发中，敬请期待！');
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    createHeroChart();
    createStrategyChart();
    generatePortfolioData();
    
    // 隐藏回测结果区域
    const backtestResults = document.getElementById('backtest-results');
    if (backtestResults) {
        backtestResults.style.display = 'none';
    }
});

// 添加滚动动画
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // 观察所有需要动画的元素
    document.querySelectorAll('.feature-card, .strategy-content, .result-card, .summary-card, .course-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
}

// 添加动画效果
setTimeout(addScrollAnimations, 100);
