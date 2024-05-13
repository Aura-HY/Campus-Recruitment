const apiUrl = import.meta.env.VITE_API_URL;

const authentication = {
    // 封装 fetch 作为基础请求函数
    fetch: async (url, options) => {
        return await fetch(`${apiUrl}${url}`, options)
            .then((res) => {
                if (!res.ok) {
                    console.error('Request error:', res.statusText);
                }
                return res.json();
            })
            .then((res) => res.data)
            .catch((error) => {
                console.error('Request error:', error);
            });
    },
    // 封装 login
    login: async (data) => {
        // 获取 jwt
        const token = await authentication.fetch('/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (token) {
            // 将 jwt 保存到 localStorage
            localStorage.setItem('token', token);
            return true;
        } else {
            return false;
        }
    }
};

export default authentication;
