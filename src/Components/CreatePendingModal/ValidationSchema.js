 import * as Yup from 'yup';
 
 const PendingSchema = Yup.object().shape({
  priority: Yup.string()
     .required('Required'),
  text: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
  status: Yup.string()
     .required('Required'),
 });

 export default PendingSchema