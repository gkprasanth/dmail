import { useEffect, useState } from 'react';
import Web3 from 'web3';
import { Mail, Calendar, User, Image as ImageIcon } from 'lucide-react';
import toast from 'react-hot-toast';
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '../contracts/DecentralizedEmail';
import { useWallet } from '../hooks/useWallet';

interface Email {
  sender: string;
  subject: string;
  content: string;
  timestamp: number;
  imageHash: string;
}

export function EmailList() {
  const [emails, setEmails] = useState<Email[]>([]);
  const [loading, setLoading] = useState(true);
  const [web3, setWeb3] = useState<Web3 | null>(null);
  const [contract, setContract] = useState<any>(null); // Adjust the contract type as needed

  const { userEmail } = useWallet();

  useEffect(() => {
    const initializeWeb3 = async () => {
      if (window.ethereum) {
        try {
          const web3Instance = new Web3(window.ethereum);
          setWeb3(web3Instance);

          const contractInstance = new web3Instance.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
          setContract(contractInstance);
        } catch (error) {
          console.error('Error initializing Web3:', error);
          toast.error('Failed to initialize Web3');
        }
      } else {
        toast.error('Ethereum provider not found');
      }
    };

    initializeWeb3();
  }, []);

  useEffect(() => {
    if (contract) {
      fetchEmails();
    }
  }, [contract]);

  const fetchEmails = async () => {
    try {
      if (contract && typeof contract.methods.getInbox === 'function') {
        // Make sure the user is connected to their wallet
        const accounts = await web3?.eth.requestAccounts();
        if (accounts && accounts.length > 0) {
          const inbox = await contract.methods.getInbox().call({ from: accounts[0] });
          setEmails(inbox || []);
        } else {
          toast.error('No accounts found');
        }
      } else {
        toast.error('Inbox method not found on contract');
      }
    } catch (error) {
      console.error('Error fetching emails:', error);
      toast.error('Failed to fetch emails');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {emails.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <Mail className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <p>Your inbox is empty</p>
        </div>
      ) : (
        emails.map((email, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-gray-500" />
                <span className="text-sm text-gray-600">
                  From: {email.sender}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Calendar className="w-4 h-4" />
                {new Date(Number(email.timestamp) * 1000).toLocaleDateString()}
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-2">{email.subject}</h3>
            <p className="text-gray-700 mb-4 whitespace-pre-wrap">{email.content}</p>

            {email.imageHash && (
              <div className="mt-4 border-t pt-4">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <ImageIcon className="w-4 h-4" />
                  Attached Image
                </div>
                <img
                  src={`https://ipfs.io/ipfs/${email.imageHash}`}
                  alt="IPFS Image"
                  className="w-32 h-32 object-cover rounded-lg"  // Responsive size with Tailwind
                  onError={(e) => {
                    e.currentTarget.onerror = null; 
                    e.currentTarget.src = "/path-to-placeholder-image.jpg"; 
                  }}
                />
              </div>
            )}

          </div>
        ))
      )}
    </div>
  );
}
