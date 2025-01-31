const Footer = () => {
  const yearInfo = new Date().getFullYear()

  const footerStyle = {
    color: 'green',
    fontStyle: 'italic',
    fontSize: 16,
  }
  return (
    <div style={footerStyle}>
      <br />
      <em>
        Note app, Department of Computer Science, University of Helsinki&nbsp;
        {yearInfo}
      </em>
    </div>
  )
}

export default Footer
