const SignUp = require('../src/Component/Sign_Up/SignUp.js');

describe('Sign_Up Component', () => {
  it('should render the signup form correctly', () => {
    const { getByLabelText, getByText } = render(
      <Router>
        <Sign_Up />
      </Router>
    );

    expect(getByLabelText('Role')).toBeInTheDocument();
    expect(getByLabelText('Name')).toBeInTheDocument();
    expect(getByLabelText('Phone')).toBeInTheDocument();
    expect(getByLabelText('Email')).toBeInTheDocument();
    expect(getByLabelText('Password')).toBeInTheDocument();
    expect(getByText('Submit')).toBeInTheDocument();
    expect(getByText('Reset')).toBeInTheDocument();
  });

  it('should update form fields on change', () => {
    const { getByLabelText } = render(
      <Router>
        <Sign_Up />
      </Router>
    );

    const roleSelect = getByLabelText('Role');
    const nameInput = getByLabelText('Name');
    const phoneInput = getByLabelText('Phone');
    const emailInput = getByLabelText('Email');
    const passwordInput = getByLabelText('Password');

    fireEvent.change(roleSelect, { target: { value: 'doctor' } });
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(phoneInput, { target: { value: '1234567890' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    expect(roleSelect.value).toBe('doctor');
    expect(nameInput.value).toBe('John Doe');
    expect(phoneInput.value).toBe('1234567890');
    expect(emailInput.value).toBe('john.doe@example.com');
    expect(passwordInput.value).toBe('password123');
  });

  it('should show error messages for invalid input', () => {
    const { getByLabelText, getByText } = render(
      <Router>
        <Sign_Up />
      </Router>
    );

    const emailInput = getByLabelText('Email');
    const phoneInput = getByLabelText('Phone');
    const nameInput = getByLabelText('Name');
    const passwordInput = getByLabelText('Password');
    
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.change(phoneInput, { target: { value: '123' } });
    fireEvent.change(nameInput, { target: { value: 'Jo' } });
    fireEvent.change(passwordInput, { target: { value: '123' } });
    
    fireEvent.blur(emailInput);
    fireEvent.blur(phoneInput);
    fireEvent.blur(nameInput);
    fireEvent.blur(passwordInput);
    
    expect(getByText('Enter a valid email')).toBeInTheDocument();
    expect(getByText('Phone number must have 10 characters')).toBeInTheDocument();
    expect(getByText('Enter a valid name')).toBeInTheDocument();
    expect(getByText('Password must have min 8 characters')).toBeInTheDocument();
  });

  it('should call the register function on form submit', () => {
    const { getByText } = render(
      <Router>
        <Sign_Up />
      </Router>
    );

    const submitButton = getByText('Submit');
    fireEvent.click(submitButton);

  });
});
