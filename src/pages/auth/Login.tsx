import type { IErrorRes } from '../../models/interfaces/errorRes';

import { Form, useActionData } from 'react-router-dom';
import styles from './authen.module.css';
import ErrorMsg from '../../components/layouts/ErrorMsg';



export default function Login() {
    const actionData: IErrorRes | undefined = useActionData()
    let errorEntries: [string, string][] = []
    if (actionData?.errors)
        errorEntries = Object.entries(actionData.errors)
    return (
        <div className={styles['container']}>
            <h2 className={styles['title']}>Login</h2>
            <Form className={styles['form']} method="post">
                <input name='email' type="text" placeholder="Email" className={styles['input']} />
                <input name='password' type="password" placeholder="Password" className={styles['input']} />
                {errorEntries.map(i =>
                    <ErrorMsg msg={i[1]} />
                )
                }
                <button type="submit" className={styles['button']}>Login</button>
            </Form>
        </div>
    );
}
