#!/usr/bin/env python3
"""
microCMS APIを使用して記事を公開状態に更新するスクリプト
"""

import requests
import json

# microCMS設定
SERVICE_DOMAIN = "shooon-blog"
API_KEY = "R1I9Q1cAX0fdN2577ecEce0UYUu7gnZkcZ2F"
BASE_URL = f"https://{SERVICE_DOMAIN}.microcms.io/api/v1"
ARTICLE_ID = "eo_za7z7wd"

# ヘッダー設定
headers = {
    "X-MICROCMS-API-KEY": API_KEY,
    "Content-Type": "application/json"
}

def publish_article():
    """記事を公開状態に更新"""
    print(f"記事 {ARTICLE_ID} を公開状態に更新中...")
    
    # 記事更新のペイロード
    update_payload = {
        "isPublished": True
    }
    
    # 記事更新APIエンドポイント
    update_url = f"{BASE_URL}/blogs/{ARTICLE_ID}"
    
    try:
        response = requests.patch(update_url, headers=headers, json=update_payload)
        response.raise_for_status()
        
        print("記事の公開状態更新成功!")
        print("記事が公開されました。数分後にブログサイトで確認できます。")
        return True
        
    except requests.exceptions.RequestException as e:
        print(f"記事公開エラー: {e}")
        if hasattr(e.response, 'text'):
            print(f"レスポンス: {e.response.text}")
        return False

def main():
    """メイン処理"""
    print("=== Manus記事公開システム ===")
    
    success = publish_article()
    if success:
        print("\n=== 公開完了 ===")
        print("Manusの自己紹介記事が正常に公開されました！")
        print("ブログサイトで確認してください: https://shooon.com/")
    else:
        print("記事の公開に失敗しました。")

if __name__ == "__main__":
    main()

