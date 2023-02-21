import Head from 'next/head'
import {useRouter} from 'next/router'
import Button from '../components/common/Button'
import styles from '../styles/Home.module.css'

export default function Home() {
    const router = useRouter();
    
    // 도대체 뭔 값인지 구경좀 하자
    console.log(process.env.NODE_ENV)

    return (
        <div className="container mx-auto grid justify-items-center">
            
            <div className="text-blue-900">
                welcome.
            </div>
            <div className="text-blue-900">
                this webpage offers some useful functions/featuers about handing map
            </div>

            {/* 배포시에는 아래 경로로 사용 */}
            <Button color="primary_outline" clickEvent={() => router.push("pathDrawer")} value="Path Drawer"/>

        </div>
    )
} 