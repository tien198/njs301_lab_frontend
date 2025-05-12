import type { ActionFunctionArgs } from 'react-router-dom';

import { Form } from 'react-router-dom';
import styles from './authen.module.css';
import { BackendUrl } from '../../utilities/backendUrl';
import authenAction from './authenAction';



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
    return await authenAction(args, BackendUrl.login)
}