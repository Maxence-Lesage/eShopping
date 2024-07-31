"use server"

const donnees = { email: 'nanami@yahoo.com', password: 'magicwaysmyfriend' };
export async function deleteUs() {
  const res = await fetch('http://localhost:3001/users/login', {
    method: 'POST',
    credentials: 'include',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(donnees)
  })
  const data = await res.json();
  if (res.ok) return data.success;
  return data.error;
}

export async function tabi() {
  const res = await fetch('http://localhost:3001/users/protected', {
    method: 'POST',
    credentials: 'include',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: "darkness is my destiny" })
  })
  const data = await res.text();
  return data;
}

// const donnees = { username: 'Nanami', email: 'nanami@yahoo.com', password: 'magicwaysmyfriend' };
// SYSTEM OF REGISTERING
// export async function deleteUs() {
//   const res = await fetch('http://localhost:3001/users/register', {
//     method: 'POST',
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(donnees)
//   })
//   const data = await res.json();
//   if (res.ok) return data.success;
//   return data.error;
// }