const styles = {
    page: {
        "minHeight": "100vh",
        "margin": "-8px",
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        "justifyContent": "center",
        "background": "#fff",
        "fontFamily": "Arial, sans-serif",
        "color": "#202124"
    },
    title: {
        "fontSize": "clamp(1.1rem, 4vw, 1.8rem)",
        "marginBottom": "1.5rem",
        "fontWeight": "400",
        "padding": "0 1rem",
        "textAlign": "center"
    },
    button: {
        "padding": "0.7rem 1.8rem",
        "fontSize": "0.9rem",
        "borderRadius": "4px",
        "border": "1px solid #dadce0",
        "background": "#f8f9fa",
        "cursor": "pointer",
        "color": "#3c4043"
    }
};

function Home() {
    return <div style={styles.page}>
        <h1 style={styles.title}>Se você quer ficar rico, clica nesse botão</h1>
        <button style={styles.button} onClick={() => alert("Parabéns todo seu saldo bancário sumiu!")}>Clique aqui!</button>
    </div>
}

export default Home;