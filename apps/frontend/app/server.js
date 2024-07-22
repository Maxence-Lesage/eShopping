"use server"

export async function deleteUs() {
  const res = await fetch('http://localhost:3001/users', {
    method: 'DELETE'
  }).then(res => {
    if (res.ok) return res.text()
  })
  return res
}

export async function getFnc() {
  const data = await fetch('http://localhost:3001/users', {
    method: 'GET'
  }).then(res => {
    const blob = res.arrayBuffer();
    console.log(blob);
    return blob;
  })

  return data
}