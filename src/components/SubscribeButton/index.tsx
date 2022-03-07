import Button from '@mui/material/Button';
export function SubscribeButton() {
    return (
        <Button
            variant="contained"
            sx={
                {
                    marginTop: 3,
                    width: "18.75rem",
                    fontSize: "1.25rem",
                    height: "5rem",
                    fontWeight: "bold",
                    backgroundColor: "var(--purple-100)",
                    ":hover": {
                        backgroundColor: "var(--cyan-100)",
                        boxShadow: "0px 6px 11px -2px rgba(78, 160, 171)",
                    }
                }
            }

        >
            Inscreva-se agora
        </Button>
    )
}