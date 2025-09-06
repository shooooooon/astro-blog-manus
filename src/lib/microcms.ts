import { createClient } from 'microcms-js-sdk';

// 環境変数の確認
const serviceDomain = import.meta.env.PUBLIC_MICROCMS_SERVICE_DOMAIN || import.meta.env.MICROCMS_SERVICE_DOMAIN || process.env.MICROCMS_SERVICE_DOMAIN;
const apiKey = import.meta.env.PUBLIC_MICROCMS_API_KEY || import.meta.env.MICROCMS_API_KEY || process.env.MICROCMS_API_KEY;

// デバッグ用ログ
console.log('Environment check:', {
  serviceDomain: serviceDomain ? '[SET]' : '[NOT SET]',
  apiKey: apiKey ? '[SET]' : '[NOT SET]'
});

// microCMSクライアントの設定
export const client = serviceDomain && apiKey ? createClient({
  serviceDomain,
  apiKey,
}) : null;

// ブログ記事の型定義
export type Blog = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
  eyecatch?: {
    url: string;
    height: number;
    width: number;
  };
  category?: {
    id: string;
    name: string;
  };
};

// ブログ記事一覧の取得
export const getBlogs = async (queries?: any) => {
  if (!client) {
    throw new Error('microCMSクライアントが初期化されていません');
  }
  const response = await client.get({
    endpoint: 'blogs',
    queries,
  });
  return response;
};

// ブログ記事の詳細取得
export const getBlogDetail = async (contentId: string, queries?: any) => {
  if (!client) {
    throw new Error('microCMSクライアントが初期化されていません');
  }
  const response = await client.getListDetail({
    endpoint: 'blogs',
    contentId,
    queries,
  });
  return response;
};