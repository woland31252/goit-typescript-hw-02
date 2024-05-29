import {loadMoreBtnProps} from './loadMoreBtn.types'
import css from '../LoadMoreBtn/LoadMoreBtn.module.css'
export default function LoadMoreBtn({ onClick }: loadMoreBtnProps) {
    return (
        <div className={css.loadBtnContainer}>
            <button className={css.loadBtn} onClick={onClick}>Load more</button>
        </div>
    )
}