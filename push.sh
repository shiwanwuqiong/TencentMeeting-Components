#!/bin/bash

# GitHub 推送脚本
cd "$(dirname "$0")"

echo "正在推送代码到 GitHub..."
echo "请输入以下信息："
echo "  - 用户名: shiwanwuqiong"
echo "  - 密码: (请输入 GitHub Personal Access Token)"
echo ""
echo "如果还没有 Token，请访问: https://github.com/settings/tokens"
echo "创建 Token 时请勾选 'repo' 权限"
echo ""

git remote set-url origin https://shiwanwuqiong@github.com/shiwanwuqiong/TencentMeeting-Components.git
git push -u origin main
