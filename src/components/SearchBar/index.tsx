import { SearchIcon } from './Icons';
import styles from './index.module.scss';

export default function SearchBar() {
    return (
        <div className='mb-4'>
            <div className='relative'>
                <SearchIcon />
                <input 
                    className='text-sm w-full rounded-3xl p-3 pl-12' 
                    placeholder="Search Twitter"
                    id={styles.input} 
                />
            </div>
        </div>
    )
}