"use server"

const donnees = { username: 'Nanami', email: 'nanami@yahoo.com', password: 'magicwaysmyfriend' };

export async function deleteUs() {
  const res = await fetch('http://localhost:3001/users/register', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(donnees)
  })
  const data = await res.json();
  if (res.ok) return data.success;
  return data.error;
}

// export async function getFnc() {
//   const data = await fetch('http://localhost:3001/users', {
//     method: 'GET'
//   }).then(res => {
//     const blob = res.arrayBuffer();
//     console.log(blob);
//     return blob;
//   })

//   return data
// }