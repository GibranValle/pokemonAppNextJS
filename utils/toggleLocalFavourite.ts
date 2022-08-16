const getFavourites = (): number[] => {
  let favourites: number[] = JSON.parse(
    localStorage.getItem('favourites') || '[]'
  )
  return favourites
}

const toggleLocalFavourite = (id: number) => {
  let favourites: number[] = getFavourites()
  if (!favourites.includes(id)) favourites.push(id)
  else favourites = favourites.filter((favId) => favId !== id)
  localStorage.setItem('favourites', JSON.stringify(favourites))
  console.log(favourites)
}

const existInFavourites = (id: number): boolean => {
  let favourites: number[] = []
  if (typeof window !== 'undefined') favourites = getFavourites()
  return favourites.includes(id)
}

export { existInFavourites, getFavourites, toggleLocalFavourite }
