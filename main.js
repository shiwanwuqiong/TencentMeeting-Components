// ==================== 主题切换 ====================
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// 从本地存储加载主题
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);

// 切换主题
themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// ==================== 页面配置 ====================
const pageConfig = {
    color: {
        title: 'Color色彩',
        description: '色彩是界面设计中最重要的视觉元素之一。腾讯会议的色彩系统遵循品牌调性，提供清晰、一致的视觉体验。',
        demo: 'color-demo',
        api: 'color-api',
        guide: 'color-guide'
    },
    shadow: {
        title: 'Shadow阴影',
        description: '阴影用于表达元素的层级关系和视觉深度，提供清晰的视觉层次。',
        demo: 'shadow-demo',
        api: 'shadow-api',
        guide: 'shadow-guide'
    },
    radius: {
        title: 'Radius圆角',
        description: '圆角用于软化界面元素，提供更加友好和现代的视觉体验。',
        demo: 'radius-demo',
        api: 'radius-api',
        guide: 'radius-guide'
    },
    button: {
        title: 'Button按钮',
        description: '按钮用于触发操作，是用户与产品交互的核心组件之一。',
        demo: 'button-demo',
        api: 'button-api',
        guide: 'button-guide'
    },
    icon: {
        title: 'Icon图标',
        description: '图标用于传达信息，增强视觉识别度，提升用户体验。',
        demo: 'icon-demo',
        api: 'icon-api',
        guide: 'icon-guide'
    }
};

// ==================== 页面内容生成器 ====================
const contentGenerators = {
    // Color色彩
    'color-demo': () => `
        <div class="demo-section">
            <div class="demo-section-title">品牌色</div>
            <div class="demo-card">
                <div class="color-grid">
                    <div class="color-item">
                        <div class="color-swatch" style="background-color: #0052d9;"></div>
                        <div class="color-info">
                            <div class="color-name">Blue-6</div>
                            <div class="color-hex">#0052D9</div>
                        </div>
                    </div>
                    <div class="color-item">
                        <div class="color-swatch" style="background-color: #0068ff;"></div>
                        <div class="color-info">
                            <div class="color-name">Blue-5</div>
                            <div class="color-hex">#0068FF</div>
                        </div>
                    </div>
                    <div class="color-item">
                        <div class="color-swatch" style="background-color: #266fe8;"></div>
                        <div class="color-info">
                            <div class="color-name">Blue-7</div>
                            <div class="color-hex">#266FE8</div>
                        </div>
                    </div>
                    <div class="color-item">
                        <div class="color-swatch" style="background-color: #003399;"></div>
                        <div class="color-info">
                            <div class="color-name">Blue-8</div>
                            <div class="color-hex">#003399</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="demo-section">
            <div class="demo-section-title">功能色</div>
            <div class="demo-card">
                <div class="color-grid">
                    <div class="color-item">
                        <div class="color-swatch" style="background-color: #e34d59;"></div>
                        <div class="color-info">
                            <div class="color-name">Error</div>
                            <div class="color-hex">#E34D59</div>
                        </div>
                    </div>
                    <div class="color-item">
                        <div class="color-swatch" style="background-color: #e7e7e7;"></div>
                        <div class="color-info">
                            <div class="color-name">Warning</div>
                            <div class="color-hex">#E7E7E7</div>
                        </div>
                    </div>
                    <div class="color-item">
                        <div class="color-swatch" style="background-color: #2ba471;"></div>
                        <div class="color-info">
                            <div class="color-name">Success</div>
                            <div class="color-hex">#2BA471</div>
                        </div>
                    </div>
                    <div class="color-item">
                        <div class="color-swatch" style="background-color: #0052d9;"></div>
                        <div class="color-info">
                            <div class="color-name">Info</div>
                            <div class="color-hex">#0052D9</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="demo-section">
            <div class="demo-section-title">中性色</div>
            <div class="demo-card">
                <div class="color-grid">
                    <div class="color-item">
                        <div class="color-swatch" style="background-color: #000000;"></div>
                        <div class="color-info">
                            <div class="color-name">Gray-1</div>
                            <div class="color-hex">#000000</div>
                        </div>
                    </div>
                    <div class="color-item">
                        <div class="color-swatch" style="background-color: #666666;"></div>
                        <div class="color-info">
                            <div class="color-name">Gray-2</div>
                            <div class="color-hex">#666666</div>
                        </div>
                    </div>
                    <div class="color-item">
                        <div class="color-swatch" style="background-color: #999999;"></div>
                        <div class="color-info">
                            <div class="color-name">Gray-3</div>
                            <div class="color-hex">#999999</div>
                        </div>
                    </div>
                    <div class="color-item">
                        <div class="color-swatch" style="background-color: #e7e7e7;"></div>
                        <div class="color-info">
                            <div class="color-name">Gray-4</div>
                            <div class="color-hex">#E7E7E7</div>
                        </div>
                    </div>
                    <div class="color-item">
                        <div class="color-swatch" style="background-color: #f3f3f3;"></div>
                        <div class="color-info">
                            <div class="color-name">Gray-5</div>
                            <div class="color-hex">#F3F3F3</div>
                        </div>
                    </div>
                    <div class="color-item">
                        <div class="color-swatch" style="background-color: #ffffff; border: 1px solid #e7e7e7;"></div>
                        <div class="color-info">
                            <div class="color-name">Gray-6</div>
                            <div class="color-hex">#FFFFFF</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,

    'color-api': () => `
        <div class="demo-section">
            <div class="demo-section-title">色彩变量</div>
            <table class="api-table">
                <thead>
                    <tr>
                        <th>变量名</th>
                        <th>值</th>
                        <th>用途</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>--primary-color</code></td>
                        <td><code>#0052d9</code></td>
                        <td>主品牌色</td>
                    </tr>
                    <tr>
                        <td><code>--text-primary</code></td>
                        <td><code>#000000</code></td>
                        <td>主要文字颜色</td>
                    </tr>
                    <tr>
                        <td><code>--text-secondary</code></td>
                        <td><code>#666666</code></td>
                        <td>次要文字颜色</td>
                    </tr>
                    <tr>
                        <td><code>--text-tertiary</code></td>
                        <td><code>#999999</code></td>
                        <td>辅助文字颜色</td>
                    </tr>
                    <tr>
                        <td><code>--bg-primary</code></td>
                        <td><code>#ffffff</code></td>
                        <td>主要背景色</td>
                    </tr>
                    <tr>
                        <td><code>--bg-secondary</code></td>
                        <td><code>#f3f3f3</code></td>
                        <td>次要背景色</td>
                    </tr>
                    <tr>
                        <td><code>--border-color</code></td>
                        <td><code>#e7e7e7</code></td>
                        <td>边框颜色</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,

    'color-guide': () => `
        <div class="guide-section">
            <h3>使用原则</h3>
            <p>色彩的使用应该遵循以下原则：</p>
            <ul>
                <li>主品牌色（Blue系列）用于主要按钮、链接和强调内容</li>
                <li>功能色用于表达不同的状态和反馈</li>
                <li>中性色用于文本和背景，建立清晰的视觉层次</li>
                <li>保持色彩的一致性，不要过度使用颜色</li>
            </ul>
        </div>
        <div class="guide-section">
            <h3>色彩对比度</h3>
            <p>确保文字与背景之间有足够的对比度，遵循WCAG 2.0 AA标准（最小对比度4.5:1）。</p>
        </div>
    `,

    // Radius圆角
    'radius-demo': () => `
        <div class="demo-section">
            <div class="demo-section-title">圆角规范（基于TDesign）</div>
            <div class="demo-card">
                <div class="radius-grid">
                    <div class="radius-item">
                        <div class="radius-swatch radius-sm">var(--td-radius-small, 4px)</div>
                        <div class="radius-info">
                            <div class="radius-name">Small</div>
                            <div class="radius-value">--td-radius-small</div>
                        </div>
                    </div>
                    <div class="radius-item">
                        <div class="radius-swatch radius-md">var(--td-radius-medium, 8px)</div>
                        <div class="radius-info">
                            <div class="radius-name">Medium</div>
                            <div class="radius-value">--td-radius-medium</div>
                        </div>
                    </div>
                    <div class="radius-item">
                        <div class="radius-swatch radius-lg">var(--td-radius-large, 12px)</div>
                        <div class="radius-info">
                            <div class="radius-name">Large</div>
                            <div class="radius-value">--td-radius-large</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="demo-section">
            <div class="demo-section-title">应用示例</div>
            <div class="demo-card">
                <div class="radius-examples">
                    <div class="radius-example">
                        <div class="example-box radius-sm">Small圆角</div>
                    </div>
                    <div class="radius-example">
                        <div class="example-box radius-md">Medium圆角</div>
                    </div>
                    <div class="radius-example">
                        <div class="example-box radius-lg">Large圆角</div>
                    </div>
                </div>
            </div>
        </div>
    `,

    'radius-api': () => `
        <div class="demo-section">
            <div class="demo-section-title">TDesign圆角变量</div>
            <table class="api-table">
                <thead>
                    <tr>
                        <th>变量名</th>
                        <th>默认值</th>
                        <th>用途</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>--td-radius-small</code></td>
                        <td><code>4px</code></td>
                        <td>小圆角，用于小尺寸元素</td>
                    </tr>
                    <tr>
                        <td><code>--td-radius-medium</code></td>
                        <td><code>8px</code></td>
                        <td>中等圆角，用于卡片、按钮等</td>
                    </tr>
                    <tr>
                        <td><code>--td-radius-large</code></td>
                        <td><code>12px</code></td>
                        <td>大圆角，用于对话框、大型卡片等</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,

    'radius-guide': () => `
        <div class="guide-section">
            <h3>使用原则</h3>
            <p>圆角的使用应该遵循以下原则：</p>
            <ul>
                <li>小圆角适用于小尺寸元素，如标签、徽章等</li>
                <li>中等圆角适用于大部分组件，如按钮、卡片等</li>
                <li>大圆角适用于大型组件，如对话框、弹窗等</li>
                <li>保持圆角的一致性，避免混用过多不同大小的圆角</li>
            </ul>
        </div>
    `,

    // Button按钮
    'button-demo': () => `
        <div class="demo-section">
            <div class="demo-section-title">按钮类型（基于TDesign）</div>
            <div class="demo-card">
                <div class="button-group">
                    <button class="t-button t-button-primary">主要按钮</button>
                    <button class="t-button t-button-default">默认按钮</button>
                    <button class="t-button t-button-dashed">虚线按钮</button>
                    <button class="t-button t-button-text">文字按钮</button>
                </div>
            </div>
        </div>

        <div class="demo-section">
            <div class="demo-section-title">按钮尺寸</div>
            <div class="demo-card">
                <div class="button-group">
                    <button class="t-button t-button-primary t-button-large">大尺寸</button>
                    <button class="t-button t-button-primary t-button-medium">中尺寸</button>
                    <button class="t-button t-button-primary t-button-small">小尺寸</button>
                </div>
            </div>
        </div>

        <div class="demo-section">
            <div class="demo-section-title">按钮状态</div>
            <div class="demo-card">
                <div class="button-group">
                    <button class="t-button t-button-primary">正常</button>
                    <button class="t-button t-button-primary" disabled>禁用</button>
                    <button class="t-button t-button-primary t-button-loading">
                        <span class="loading-icon"></span>
                        加载中
                    </button>
                </div>
            </div>
        </div>
    `,

    'button-api': () => `
        <div class="demo-section">
            <div class="demo-section-title">TDesign按钮Props</div>
            <table class="api-table">
                <thead>
                    <tr>
                        <th>属性</th>
                        <th>说明</th>
                        <th>类型</th>
                        <th>默认值</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>type</code></td>
                        <td>按钮类型</td>
                        <td><code>'primary' | 'default' | 'dashed' | 'text'</code></td>
                        <td><code>'default'</code></td>
                    </tr>
                    <tr>
                        <td><code>size</code></td>
                        <td>按钮尺寸</td>
                        <td><code>'small' | 'medium' | 'large'</code></td>
                        <td><code>'medium'</code></td>
                    </tr>
                    <tr>
                        <td><code>disabled</code></td>
                        <td>是否禁用</td>
                        <td><code>boolean</code></td>
                        <td><code>false</code></td>
                    </tr>
                    <tr>
                        <td><code>loading</code></td>
                        <td>是否加载中</td>
                        <td><code>boolean</code></td>
                        <td><code>false</code></td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,

    'button-guide': () => `
        <div class="guide-section">
            <h3>使用原则</h3>
            <p>按钮的使用应该遵循以下原则：</p>
            <ul>
                <li>主要按钮用于页面中最重要的操作</li>
                <li>默认按钮用于次要操作</li>
                <li>文字按钮用于低优先级操作</li>
                <li>避免在同一区域使用过多主要按钮</li>
                <li>禁用状态的按钮应该有明显的视觉反馈</li>
            </ul>
        </div>
    `,

    // Shadow阴影（占位）
    'shadow-demo': () => `
        <div class="demo-section">
            <div class="demo-section-title">阴影规范（基于TDesign）</div>
            <div class="demo-card">
                <div class="shadow-grid">
                    <div class="shadow-item">
                        <div class="shadow-swatch shadow-1">Shadow 1</div>
                        <div class="shadow-info">
                            <div class="shadow-name">一级阴影</div>
                            <div class="shadow-value">--td-shadow-1</div>
                        </div>
                    </div>
                    <div class="shadow-item">
                        <div class="shadow-swatch shadow-2">Shadow 2</div>
                        <div class="shadow-info">
                            <div class="shadow-name">二级阴影</div>
                            <div class="shadow-value">--td-shadow-2</div>
                        </div>
                    </div>
                    <div class="shadow-item">
                        <div class="shadow-swatch shadow-3">Shadow 3</div>
                        <div class="shadow-info">
                            <div class="shadow-name">三级阴影</div>
                            <div class="shadow-value">--td-shadow-3</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="demo-section">
            <div class="demo-section-title">应用示例</div>
            <div class="demo-card">
                <div class="shadow-examples">
                    <div class="shadow-example">
                        <div class="example-card shadow-1">一级阴影卡片</div>
                    </div>
                    <div class="shadow-example">
                        <div class="example-card shadow-2">二级阴影卡片</div>
                    </div>
                    <div class="shadow-example">
                        <div class="example-card shadow-3">三级阴影卡片</div>
                    </div>
                </div>
            </div>
        </div>
    `,
    'shadow-api': () => `
        <div class="demo-section">
            <div class="demo-section-title">TDesign阴影变量</div>
            <table class="api-table">
                <thead>
                    <tr>
                        <th>变量名</th>
                        <th>默认值</th>
                        <th>用途</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>--td-shadow-1</code></td>
                        <td><code>0 1px 2px rgba(0, 0, 0, 0.05)</code></td>
                        <td>一级阴影，用于轻度悬浮效果</td>
                    </tr>
                    <tr>
                        <td><code>--td-shadow-2</code></td>
                        <td><code>0 2px 8px rgba(0, 0, 0, 0.08)</code></td>
                        <td>二级阴影，用于卡片悬浮效果</td>
                    </tr>
                    <tr>
                        <td><code>--td-shadow-3</code></td>
                        <td><code>0 4px 16px rgba(0, 0, 0, 0.12)</code></td>
                        <td>三级阴影，用于弹窗等强悬浮效果</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,
    'shadow-guide': () => `
        <div class="guide-section">
            <h3>使用原则</h3>
            <p>TDesign阴影的使用应该遵循以下原则：</p>
            <ul>
                <li>一级阴影用于轻度悬浮效果，如按钮hover状态</li>
                <li>二级阴影用于卡片悬浮效果，如卡片、导航栏</li>
                <li>三级阴影用于强悬浮效果，如弹窗、对话框</li>
                <li>保持阴影的一致性，避免混用过多不同级别的阴影</li>
            </ul>
        </div>
    `,

    // Icon图标（占位）
    'icon-demo': () => `
        <div class="demo-section">
            <div class="demo-section-title">图标规范（基于TDesign图标库）</div>
            <div class="demo-card">
                <p>TDesign 提供了一套完整的图标系统，支持多种使用方式：</p>
                <div class="icon-grid">
                    <div class="icon-item">
                        <div class="icon-box">
                            <i class="t-icon t-icon-home"></i>
                        </div>
                        <div class="icon-name">首页</div>
                        <div class="icon-code">t-icon-home</div>
                    </div>
                    <div class="icon-item">
                        <div class="icon-box">
                            <i class="t-icon t-icon-user"></i>
                        </div>
                        <div class="icon-name">用户</div>
                        <div class="icon-code">t-icon-user</div>
                    </div>
                    <div class="icon-item">
                        <div class="icon-box">
                            <i class="t-icon t-icon-setting"></i>
                        </div>
                        <div class="icon-name">设置</div>
                        <div class="icon-code">t-icon-setting</div>
                    </div>
                    <div class="icon-item">
                        <div class="icon-box">
                            <i class="t-icon t-icon-search"></i>
                        </div>
                        <div class="icon-name">搜索</div>
                        <div class="icon-code">t-icon-search</div>
                    </div>
                    <div class="icon-item">
                        <div class="icon-box">
                            <i class="t-icon t-icon-edit"></i>
                        </div>
                        <div class="icon-name">编辑</div>
                        <div class="icon-code">t-icon-edit</div>
                    </div>
                    <div class="icon-item">
                        <div class="icon-box">
                            <i class="t-icon t-icon-delete"></i>
                        </div>
                        <div class="icon-name">删除</div>
                        <div class="icon-code">t-icon-delete</div>
                    </div>
                </div>
                <p style="margin-top: 24px; color: var(--text-tertiary); font-size: 14px;">
                    注：需要引入 TDesign 图标库（tdesign-icons-vue-next）才能正常显示图标。
                </p>
            </div>
        </div>
    `,
    'icon-api': () => `
        <div class="demo-section">
            <div class="demo-section-title">TDesign图标API</div>
            <table class="api-table">
                <thead>
                    <tr>
                        <th>属性</th>
                        <th>说明</th>
                        <th>类型</th>
                        <th>默认值</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>name</code></td>
                        <td>图标名称</td>
                        <td><code>string</code></td>
                        <td><code>''</code></td>
                    </tr>
                    <tr>
                        <td><code>size</code></td>
                        <td>图标尺寸</td>
                        <td><code>'small' | 'medium' | 'large'</code></td>
                        <td><code>'medium'</code></td>
                    </tr>
                    <tr>
                        <td><code>color</code></td>
                        <td>图标颜色</td>
                        <td><code>string</code></td>
                        <td><code>''</code></td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,
    'icon-guide': () => `
        <div class="guide-section">
            <h3>使用原则</h3>
            <p>TDesign图标的使用应该遵循以下原则：</p>
            <ul>
                <li>使用语义明确的图标，确保用户能够理解其含义</li>
                <li>保持图标风格的一致性，避免混用不同风格的图标</li>
                <li>根据使用场景选择合适的图标尺寸</li>
                <li>图标的颜色应该与品牌色和功能色保持一致</li>
            </ul>
        </div>
        <div class="guide-section">
            <h3>引入方式</h3>
            <p>通过CDN引入TDesign图标库：</p>
            <pre><code>&lt;link rel="stylesheet" href="https://unpkg.com/tdesign-icons-vue-next/dist/tdesign-icons.min.css"&gt;</code></pre>
            <p>或者通过npm安装：</p>
            <pre><code>npm install tdesign-icons-vue-next</code></pre>
        </div>
    `
};

// ==================== 导航和页面切换 ====================
const navLinks = document.querySelectorAll('.nav-link');
const pageTitle = document.getElementById('pageTitle');
const pageDescription = document.getElementById('pageDescription');
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');

// 更新页面内容
function updatePage(pageKey) {
    const config = pageConfig[pageKey] || pageConfig.color;
    
    // 更新标题和描述
    pageTitle.textContent = config.title;
    pageDescription.textContent = config.description;
    
    // 更新导航激活状态
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === pageKey) {
            link.classList.add('active');
        }
    });
    
    // 更新tab内容
    updateTabContent(pageKey, 'demo');
    
    // 重置tab按钮状态
    tabBtns.forEach(btn => btn.classList.remove('active'));
    tabBtns[0].classList.add('active');
}

// 更新Tab内容
function updateTabContent(pageKey, tabKey) {
    const config = pageConfig[pageKey] || pageConfig.color;
    const contentKey = `${pageKey}-${tabKey}`;
    
    const generator = contentGenerators[contentKey];
    if (generator) {
        const tabDemo = document.getElementById('tab-demo');
        const tabApi = document.getElementById('tab-api');
        const tabGuide = document.getElementById('tab-guide');
        
        tabDemo.innerHTML = contentGenerators[config.demo]();
        tabApi.innerHTML = contentGenerators[config.api]();
        tabGuide.innerHTML = contentGenerators[config.guide]();
    }
}

// 导航点击事件
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageKey = link.dataset.page;
        updatePage(pageKey);
    });
});

// Tab切换事件
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabKey = btn.dataset.tab;
        
        // 更新按钮状态
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // 更新内容显示
        tabPanes.forEach(pane => pane.classList.remove('active'));
        document.getElementById(`tab-${tabKey}`).classList.add('active');
    });
});

// ==================== 初始化 ====================
function init() {
    // 从URL参数获取当前页面
    const urlParams = new URLSearchParams(window.location.search);
    const pageKey = urlParams.get('page') || 'color';
    updatePage(pageKey);
    
    // 添加组件样式
    addComponentStyles();
}

// 添加组件特定样式
function addComponentStyles() {
    const style = document.createElement('style');
    style.textContent = `
        /* 色彩展示样式 */
        .color-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 16px;
        }
        
        .color-item {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }
        
        .color-swatch {
            width: 100%;
            height: 80px;
            border-radius: 8px;
            border: 1px solid var(--border-color);
        }
        
        .color-info {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }
        
        .color-name {
            font-size: 14px;
            font-weight: 600;
            color: var(--text-primary);
        }
        
        .color-hex {
            font-size: 12px;
            color: var(--text-tertiary);
            font-family: 'Courier New', monospace;
        }
        
        /* 圆角展示样式 */
        .radius-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 16px;
        }
        
        .radius-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;
        }
        
        .radius-swatch {
            width: 100px;
            height: 100px;
            background-color: var(--bg-primary);
            border: 2px solid var(--border-color);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--text-secondary);
            font-size: 14px;
        }
        
        .radius-sm { border-radius: var(--border-radius-sm); }
        .radius-md { border-radius: var(--border-radius-md); }
        .radius-lg { border-radius: var(--border-radius-lg); }
        
        .radius-info {
            text-align: center;
        }
        
        .radius-name {
            font-size: 14px;
            font-weight: 600;
            color: var(--text-primary);
        }
        
        .radius-value {
            font-size: 12px;
            color: var(--text-tertiary);
            font-family: 'Courier New', monospace;
        }
        
        .radius-examples {
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
        }
        
        .radius-example {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }
        
        .example-box {
            padding: 24px 48px;
            background-color: var(--bg-primary);
            border: 2px solid var(--border-color);
            display: inline-block;
        }
        
        /* 按钮样式 */
        .button-group {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            align-items: center;
        }
        
        .t-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 8px 16px;
            font-size: 14px;
            font-weight: 500;
            border-radius: var(--border-radius-sm);
            transition: all 0.2s;
            cursor: pointer;
            border: 1px solid transparent;
        }
        
        .t-button-primary {
            background-color: var(--primary-color);
            color: #ffffff;
        }
        
        .t-button-primary:hover {
            background-color: #266fe8;
        }
        
        .t-button-default {
            background-color: #ffffff;
            color: var(--text-primary);
            border-color: var(--border-color);
        }
        
        .t-button-default:hover {
            background-color: var(--bg-hover);
            border-color: var(--primary-color);
            color: var(--primary-color);
        }
        
        .t-button-dashed {
            background-color: #ffffff;
            color: var(--text-primary);
            border-color: var(--border-color);
            border-style: dashed;
        }
        
        .t-button-dashed:hover {
            background-color: var(--bg-hover);
            border-color: var(--primary-color);
            color: var(--primary-color);
        }
        
        .t-button-text {
            background-color: transparent;
            color: var(--primary-color);
        }
        
        .t-button-text:hover {
            background-color: var(--bg-hover);
        }
        
        .t-button-large {
            padding: 12px 24px;
            font-size: 16px;
        }
        
        .t-button-medium {
            padding: 8px 16px;
            font-size: 14px;
        }
        
        .t-button-small {
            padding: 4px 12px;
            font-size: 12px;
        }
        
        .t-button:disabled {
            background-color: var(--bg-secondary);
            color: var(--text-tertiary);
            border-color: var(--border-color);
            cursor: not-allowed;
        }
        
        .t-button-loading {
            opacity: 0.7;
            cursor: not-allowed;
        }
        
        .loading-icon {
            display: inline-block;
            width: 14px;
            height: 14px;
            border: 2px solid #ffffff;
            border-top-color: transparent;
            border-radius: 50%;
            animation: spin 0.6s linear infinite;
            margin-right: 8px;
        }
        
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
        
        /* 深色主题下的按钮调整 */
        [data-theme="dark"] .t-button-default {
            background-color: var(--bg-secondary);
            border-color: var(--border-color);
        }
        
        [data-theme="dark"] .t-button-dashed {
            background-color: transparent;
        }
        
        [data-theme="dark"] .example-box {
            background-color: var(--bg-secondary);
        }
        
        /* 图标展示样式 */
        .icon-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
            gap: 24px;
            margin-top: 24px;
        }
        
        .icon-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;
            padding: 16px;
            background-color: var(--bg-secondary);
            border-radius: var(--border-radius-md);
            transition: transform 0.2s, background-color 0.2s;
        }
        
        .icon-item:hover {
            background-color: var(--bg-hover);
            transform: translateY(-2px);
        }
        
        .icon-box {
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--bg-primary);
            border-radius: var(--border-radius-md);
            border: 1px solid var(--border-color);
        }
        
        .icon-box .t-icon {
            font-size: 24px;
            color: var(--text-primary);
        }
        
        .icon-name {
            font-size: 14px;
            font-weight: 500;
            color: var(--text-primary);
        }
        
        .icon-code {
            font-size: 12px;
            color: var(--text-tertiary);
            font-family: 'Courier New', monospace;
            text-align: center;
            word-break: break-all;
        }
        
        /* 阴影展示样式 */
        .shadow-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 24px;
        }
        
        .shadow-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 16px;
        }
        
        .shadow-swatch {
            width: 120px;
            height: 120px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--bg-primary);
            border-radius: var(--border-radius-md);
            color: var(--text-secondary);
            font-size: 14px;
        }
        
        .shadow-1 { box-shadow: var(--td-shadow-1, 0 1px 2px rgba(0, 0, 0, 0.05)); }
        .shadow-2 { box-shadow: var(--td-shadow-2, 0 2px 8px rgba(0, 0, 0, 0.08)); }
        .shadow-3 { box-shadow: var(--td-shadow-3, 0 4px 16px rgba(0, 0, 0, 0.12)); }
        
        .shadow-info {
            text-align: center;
        }
        
        .shadow-name {
            font-size: 14px;
            font-weight: 600;
            color: var(--text-primary);
        }
        
        .shadow-value {
            font-size: 12px;
            color: var(--text-tertiary);
            font-family: 'Courier New', monospace;
        }
        
        .shadow-examples {
            display: flex;
            flex-wrap: wrap;
            gap: 24px;
            margin-top: 16px;
        }
        
        .shadow-example {
            flex: 1;
            min-width: 200px;
        }
        
        .example-card {
            padding: 32px;
            background-color: var(--bg-primary);
            border-radius: var(--border-radius-md);
            text-align: center;
            color: var(--text-primary);
            font-weight: 500;
        }
    `;
    document.head.appendChild(style);
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);
