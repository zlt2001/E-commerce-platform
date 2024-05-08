import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// 创建一个 API
export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }), // 设置基本的查询参数，比如 base URL
    // tagTypes: ['Post'], // 可选，用于为请求添加标签
    endpoints: (builder) => ({
        // 定义一个 endpoint，包含名称和配置对象
        register: builder.mutation({
            query(user) {
                return {
                    url: '/auth/local/register',
                    method: "post",
                    body: user, //username email password
                }
            }
        }),
        login: builder.mutation({
            query(user) {
                return {
                    url: '/auth/local',
                    method: "post",
                    body: user, //identifier
                }
            }
        }),
    }),
});

// 导出 API 的 reducer 和 hooks
export const { useRegisterMutation, useLoginMutation } = authApi;