import Profile from '@/models/Profile';
import DetailsPage from '@/template/DetailsPage';
import connectDB from '@/utils/connectDB'


const ProfileDetails = async ({params:{profileId}}) => {

    await connectDB();
    const profile = await Profile.findOne({_id:profileId});

    if(!profile) return <h3>مشکلی پیش آمده است</h3>
    
  return <DetailsPage data={profile}/>
}

export default ProfileDetails