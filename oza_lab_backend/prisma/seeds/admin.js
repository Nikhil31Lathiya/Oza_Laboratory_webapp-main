import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function addAdmin () {
  await prisma.user.create({
    data: {
      title: 'mr',
      roleId: 1,
      firstName: 'Admin',
      lastName: '',
      dob: new Date('1999-10-10'),
      gender: 'male',
      email: 'ozalab.original@gmail.com',
      contact: '9484871696',
      address: 'Ghandhidham'
    }
  })
}

addAdmin()
  .then(() => {
    console.log('Admin added successfully')
  })
  .catch((e) => {
    console.error(e)
  })
