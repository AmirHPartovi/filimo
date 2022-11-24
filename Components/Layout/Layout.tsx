import Grid from '@mui/material/Grid/Grid'
import Typography from '@mui/material/Typography/Typography'
import Image from 'next/image'
import React, { ReactNode } from 'react'
import Logo from '../../Assets/Images/fa-filimo-dark-logo.png'
import Divider from '@mui/material/Divider';
import PersonIcon from '@mui/icons-material/Person';
import Avatar from '@mui/material/Avatar/Avatar'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
type Props = {
    children:ReactNode
}

const Layout = ({children}:Props) => {
  return (
    <Grid>
        <Grid container width={'100%'} height={50} bgcolor={'common.black'} direction={'row'}>
            <Grid display={'flex'} item xs={8}  alignItems={'center'}>
                <Grid justifyContent={'center'} xs={1.5}>
                    <Image src={Logo} height={25} alt={'filimo'} />
                </Grid>
                <Grid display={'flex'} item xs={1} justifyContent={'center'}  alignItems={'center'}>
                <Divider orientation="vertical" variant="middle" flexItem sx={{color:'#fff'}}/>
                </Grid>
                <Grid display={'flex'} sx={{cursor:'pointer',color:'common.white'}}>
                    <Typography color={'common.white'}>
                      {'فیلم'}
                    </Typography>
                    <KeyboardArrowDownIcon sx={{color:'#fff'}}/>
                </Grid>
            </Grid>
            <Grid display={'flex'} item xs={4} justifyContent={'flex-end'}>
            <Grid display={'flex'} alignItems={'center'} ml={2} sx={{cursor:'pointer'}}>
            <Avatar >
                <PersonIcon/>
              </Avatar>
              <KeyboardArrowDownIcon sx={{color:'#fff'}}/>
            </Grid>
            </Grid>
        </Grid>
        {children}
    </Grid>
  )
}

export default Layout