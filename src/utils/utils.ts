export const dateToDayOfWeek = (date: string) => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const d = new Date(date)
  return days[d.getDay()]
}

export const formatDate = (dateString: string) => {
  const date = new Date(dateString)

  return date
    .toLocaleString('en-US', {
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    })
    .replace(' at ', ', ')
}
