import Modal from '../modal';

export default function AccountModalLayout({ children }) {
  console.log('AccountModalLayout');
  return (
    <Modal>
      <div>
        <h1>Account Modal</h1>
        {children}
      </div>
    </Modal>
  );
}
