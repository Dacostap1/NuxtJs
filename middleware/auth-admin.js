export default function ({ $auth, redirect, route }) {
  const user = $auth.user.user

  const permissions = route.meta.map((meta) => {
    if (meta.permissions) return meta.permissions
    return []
  })
  console.log($auth.hasScope(permissions[0]))
  console.log(permissions)

  if (user && !user.is_super_admin) {
    console.log(' es admin')
  } else {
    console.log(' NO es admin')
    redirect('/')
  }
}
