import React from 'react';
import { styled } from '@mui/system';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const ProfileCard = styled(Card)(({ theme }) => ({
  minHeight: '10vh',
  width: '100%',
  backgroundColor: 'rgba(153, 190, 202, 0.666)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}));

const UserCover = styled('div')(({ theme }) => ({
  width: '100%',
  height: '25vh',
  backgroundImage: `url('data:image/jpeg;base64,/your-base64-image-data')`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
}));

const UserProfile = styled('div')(({ theme }) => ({
  width: '150px',
  height: '150px',
  border: '3px solid #fff',
  borderRadius: '50%',
  position: 'relative',
  bottom: '-60%',
  margin: 'auto',
}));

function ProfileComponents(props) {
  let userDetails = {
    userImage: 'https://img.freepik.com/free-photo/young-student-woman-wearing-denim-jacket-eyeglasses-holding-colorful-folders-showing-thumb-up-pink_176532-13861.jpg',
    userName: 'Virendra Gayakwad',
    batchId: 'PPC100',
    batchEnrolled: ['PPC', 'Logic Building'],
    userCollage: 'MIT College Pune',
    paidfees: 4000,
    pendingFees: 1000,
  };

  return (
    <ProfileCard>
      <UserCover />
      <UserProfile>
        <Avatar alt="User Profile" src={userDetails.userImage} sx={{ width: '100%', height: '100%' }} />
      </UserProfile>
      <CardContent>
        <Typography variant="h6">Student Name: {userDetails.userName}</Typography>
        <Typography variant="h6">Batch ID: {userDetails.batchId}</Typography>
        <Typography>Batch Enrolled: {userDetails.batchEnrolled.join(', ')}</Typography>
        <Typography>College: {userDetails.userCollage}</Typography>
        <Typography>Paid Fees: {userDetails.paidfees}</Typography>
        {userDetails.pendingFees ? (
          <Typography>Pending Fees: {userDetails.pendingFees}</Typography>
        ) : (
          <Typography>No pending fees</Typography>
        )}
      </CardContent>
    </ProfileCard>
  );
}

export default ProfileComponents;
