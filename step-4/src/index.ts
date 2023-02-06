import axios, { AxiosInstance } from 'axios'

// Higher order function
// logB est un "callback" = call (appeler) back (en retour)

// const promiseTimeout = (delay: number) => {
//   const p = new Promise<void>((resolve) => {
//     setTimeout(() => resolve(), delay)
//   })
//   return p
// }

// Callback hell
// setTimeout((err) => {
//   if (err == null) {
//     console.log('errur')
//     return
//   }

//   console.log('b')
// }, 1000)


// console.log('a')

// const p = promiseTimeout(0)
// p.then(() => {
//   console.log('b')
// })
// p.catch(() => {
//   console.log('errur')
// })

const axiosInstance = axios.create({
  baseURL: 'https://api.chucknorris.io'
})

console.log('a')

const listMangas = () => {
  const p = axiosInstance.get('/jokes/random')

  const newP = p.then(res => {
    const { data: { value } } = res
    return value
  })

  // const newP = new Promise((resolve, reject) => {
  //   p.then(res => {
  //     const { data: { value } } = res
  //     resolve(value)
  //   })
  // })

  return newP
}

const maP = listMangas()
maP.then(value => {
  console.log(value)
})

console.log('c')


// callbacks
// fn(cb)

// promises
// const p = fn





// 1. callbacks
// 2. promises
// 3. async / await

// (4. streams)


const getMangas = () => {
  // const newP = new Promise((resolve, reject) => {
  //   resolve('Coucou')
  // })


  // const mangasPromise = axiosInstance.get('/mangas')

  // const newP = new Promise((resolve, reject) => {
  //   mangasPromise.then(res => {
  //     const { data } = res
  //     resolve(data)
  //   })
  // })


  // Strictement équivalent
  const mangasPromise = axiosInstance.get('/mangas')

  const newP = mangasPromise.then(res => {
    const { data } = res
    return data
  })

  return newP
}

const MonComposanant = () => {
  const { mangas, setMangas } = React.useState([])

  // Je veux récupérer "UN JOUR" mesMangas
  // Promise = Promesse
  const mesMangasPromise = getMangas()

  mesMangasPromise.then(mangasData => {
    setMangas(mangasData)
  })

  return (
    <div>
      {mangas.forEach(m => (
        <div>
          {m.name}
        </div>
      ))}
    </div>
  )
}


// export const testPost = (params) => {
//     apiMPR.post('http://localhost:8080/signup', params)

//       .then(response => 
//           response.data.message
//       )