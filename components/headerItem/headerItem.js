function HeaderItem ({ Title, Icon, Link }) {
  return (
    <div className="flex flex-col hover:text-white items-center cursor-pointer group">
      <Icon className="h-8 mb-1" />
      <span className="opacity-0 group-hover:opacity-100">{ Title }</span>
    </div>
  )
}

export default HeaderItem