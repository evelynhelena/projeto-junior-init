import styles from './boxInfos.module.scss';
import Image from 'next/image';
import { ReactElement } from "react";

interface BoxInfosProps {
    path: StaticImageData;
    title: string;
    content: string;
    altImg: string;
}

export function BoxInfos({ path, title, content, altImg }: BoxInfosProps) {
    return (
        <div className={styles.box}>
            <div>
                <Image alt={altImg} src={path} width={46} height={40.77}></Image>
            </div>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    )
}