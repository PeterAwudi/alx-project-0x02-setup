import type { ReactNode } from 'react';
import { useState } from 'react';
import { 
  Modal, 
  ModalOverlay, 
  ModalContent, 
  ModalHeader, 
  ModalCloseButton, 
  ModalBody, 
  ModalFooter, 
  Button, 
  Input, 
  Textarea, 
  FormLabel, 
  FormControl 
} from '@chakra-ui/react';

interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddPost: (title: string, content: string) => void;
}

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onAddPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleAddPost = () => {
    onAddPost(title, content);
    setTitle('');
    setContent('');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add New Post</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form>
            <input type="hidden" />
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Content</FormLabel>
              <Textarea 
                value={content} 
                onChange={(e) => setContent(e.target.value)} 
              />
            </FormControl>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue" onClick={handleAddPost}>
            Add Post
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PostModal;


