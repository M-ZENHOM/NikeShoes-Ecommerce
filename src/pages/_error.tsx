import { NextPageContext } from 'next'


type ErrorProps = {
    statusCode: number
}

const Error: React.FC<ErrorProps> = ({ statusCode }) => {
    return (
        <p>
            {statusCode
                ? `An error ${statusCode} occurred on server`
                : 'An error occurred on client'}
        </p>
    )
}

export async function getServerSideProps({ res, err }: NextPageContext) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return {
        props: { statusCode }
    }
}

export default Error