import Button from '@mui/material/Button';
import styles from './subscribeButton.module.scss';
export function SubscribeButton() {
    return (
        <Button
            variant="contained"
            className={styles.subscribeButton}
        >
            Inscreva-se agora
        </Button>
    )
}