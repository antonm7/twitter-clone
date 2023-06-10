import RoutingTabs from '@/components/common/RoutingTabs';
import styles from './index.module.scss';

export default function Header() {
    return (
        <div className="w-full border-b-2 border-gray-600" id={styles.bg}>
            <h1 className='font-bold text-2xl p-5'>Home</h1>
            <div className='flex'>
                <RoutingTabs 
                    title={'For you'} 
                    active={true} 
                    navigate={() => null}
                />
                <RoutingTabs 
                    title={'Following'} 
                    active={false} 
                    navigate={() => null}
                />
            </div>
        </div>
    )
}