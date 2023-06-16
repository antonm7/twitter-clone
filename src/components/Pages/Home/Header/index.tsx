import RoutingTabs from '@/components/common/RoutingTabs';
import styles from './index.module.scss';

export default function Header() {
    return (
        <div className="w-full border_bottom" id={styles.bg}>
            <h1 className='font-bold text-2xl px-4 pt-4 pb-2'>Home</h1>
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