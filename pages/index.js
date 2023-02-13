import Head from 'next/head'
import {useRouter} from 'next/router'
import Button from '../components/common/Button'
import styles from '../styles/Home.module.css'

export default function Home() {
    const router = useRouter();
    
    return (
        <div className="container mx-auto grid justify-items-center">
            
            <div className="text-blue-900">
                welcome.
            </div>
            <div className="text-blue-900">
                this webpage offers some useful functions/featuers about handing map
            </div>
            <Button color="primary_outline" clickEvent={() => router.push("/pathDrawer")} value="Path Drawer"/>

        </div>
    )
}