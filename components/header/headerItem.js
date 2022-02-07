import Link from 'next/link'

function HeaderItem ({ Title, Icon, goto }) {
  return (
    <Link href={goto} passHref>
      <div className="flex flex-col hover:text-white items-center cursor-pointer group">
        <Icon className="h-8 mb-1" />
        <span className="opacity-0 group-hover:opacity-100">{ Title }</span>
      </div>
    </Link>
  )
}

export default HeaderItem