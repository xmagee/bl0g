export default function BlogDatebar(props) {
    const { date, title } = props

    return (
        <div style={{
            textDecoration: 'underline'
        }}>
            <b>Title:</b> { title } <br />
            <b>Posted:</b> { date }
        </div>
    )
}