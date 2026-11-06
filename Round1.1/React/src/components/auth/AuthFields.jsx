import { useState } from 'react';

   
                                                                                
                                                                                     
   
export function TextField({ id, label, icon, type = 'text', children, ...inputProps }) {
  return (
    <div className="field">
      <label className="field__label" htmlFor={id}>{label}</label>
      <div className="field__control">
        <span className="field__icon" aria-hidden="true">{icon}</span>
        <input className="field__input" id={id} type={type} {...inputProps} />
        {children}
      </div>
    </div>
  );
}

   
                                                           
                                                                                      
                                                                                  
                                                                    
   
export function PasswordField(props) {
  const [visible, setVisible] = useState(false);

  return (
    <TextField icon="•" {...props} type={visible ? 'text' : 'password'}>
      <button className="show-btn" type="button" onClick={() => setVisible(!visible)}>
        <span className="show-btn__ring"></span>{visible ? 'HIDE' : 'SHOW'}
      </button>
    </TextField>
  );
}
