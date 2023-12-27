import {render,screen} from '@testing-library/react'
import Block from './'
import '@testing-library/jest-dom';

describe('Block test cases',()=>{
    it('should render block children correctly',()=>{
        render(<Block><span>test</span><span>another</span></Block>)
        expect(screen.getByText(/test/)).toBeInTheDocument();
    })
});