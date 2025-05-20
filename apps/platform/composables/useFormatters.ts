import { formatDistanceToNow } from 'date-fns'

export const useFormatters = () => {
    function formatDate(date: string) {
        return formatDistanceToNow(new Date(date), { addSuffix: true })
    }

    return {
        formatDate
    }
}
