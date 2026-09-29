const sale1style = {
    width: '50px',
    height: '50px',
    backgroundColor: '#d20606',
    border:' 1px solid #d20606',
    textAlign: 'center',
    color: '#fff',
    position: 'absolute',
    top: '2%',
    left: '5%',
    zIndex:' 9',
    borderRadius: '50%',
    lineHeight: '50px'
}

const Sale = ({sale})=>{
    return(
        <div style={ sale > 0 ? sale1style : undefined }>
            {sale <= 0 ? '' : `${sale}%`}
        </div>
    )
}

export default Sale ;