// pages/middleware/requireAuth.js

import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const requireAuth = (WrappedComponent) => {
    const Wrapper = (props) => {
        const router = useRouter();

        useEffect(() => {
            const token = Cookies.get('token');
            if (!token) {
                localStorage.setItem('redirectUrl', window.location.pathname);
                router.push('/auth/login');
            }
        }, []);

        return <WrappedComponent {...props} />;
    };

    return Wrapper;
};

export default requireAuth;
