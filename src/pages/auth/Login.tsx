import { ActionFunctionArgs, Form, redirect } from 'react-router-dom';
import styles from './authen.module.css';
import { BackendUrl } from '../../utilities/backendUrl';

export default function Login() {
    return (
        <div className={styles['container']}>
            <h2 className={styles['title']}>Login</h2>
            <Form className={styles['form']} method="post">
                <input name='email' type="text" placeholder="Email" className={styles['input']} />
                <input name='password' type="password" placeholder="Password" className={styles['input']} />
                <button type="submit" className={styles['button']}>Login</button>
            </Form>
        </div>
    );
}


export async function action(args: ActionFunctionArgs) {
    const formData = await args.request.formData();
    const data = Object.fromEntries(formData);
    
    const res = await fetch(BackendUrl.login, {
        method: args.request.method,
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        throw new Error('Network response was not ok');
    }

    return redirect('/')
}