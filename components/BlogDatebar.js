export default function BlogDatebar(props) {
    const { date, title } = props

    return (
        <div className='blog-datebar'>
            <b>Title:</b> { title } <br />
            <b>Posted:</b> { date }
        </div>
    )
}