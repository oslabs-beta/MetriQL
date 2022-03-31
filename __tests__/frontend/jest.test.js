import * as React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

//overall app 
import App from '../../client/components/App';
//Splash page
import splashPage from '../../pages/index.js';
import Nav from '../../client/components/Nav.js';
import MainFeature from '../../client/components/styles/MainFeature.js'
import SecondFeature from '../../client/components/styles/SecondFeature.js'
import ThirdFeature from '../../client/components/styles/ThirdFeature.js'
import Team from '../../client/components/styles/Team.js'

//Tool page 
import toolPage from '../../pages/main.js'


//establish mock server 
const server =  setupServer(  
    rest.get('/', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({ greeting: 'hello' }));
    })
  )

//create variables for mock contexts
let realContext;
let fakeContext;

//establish API mock before any and all tests
beforeAll(() => server.listen());
//set up mock context before each test
beforeEach(() => {
    realContext = React.useContext;
    fakeContext = React.useContext = jest.fn()
})
//reset handlers that are declared during testing and reset real context after reach tet
afterEach(() => {
    React.useContext = realContext;
    server.resetHandlers();
})

//close server at end of all tests
afterAll(() => server.close())

xdescribe('Renders Site', () => {
    describe('renders homepage', () => {
        test('renders nav bar', async () => {
            const { getByText } = render(<Nav />)
            const element = await getByText(/Download/i);
            expect(element).toBeInTheDocument();
        });

        test ('renders MainFeature', async () => {
            const { findByText } = render(<MainFeature />)
            const element = await findByText(/MetricQL/);
            expect(element).toBeInTheDocument();
        })
        test ('renders SecondFeature', async () => {
            const { findByText } = render(<SecondFeature />)
            const element = await findByText(/website/);
            expect(element).toBeInTheDocument();
        })
        test ('renders ThirdFeature', async () => {
            const { findByText } = render(<ThirdFeature />)
            const element = await findByText(/Schema/);
            expect(element).toBeInTheDocument();
        })
        test ('renders Team', async () => {
            const { findByText } = render(<Team/>)
            const element = await findByText(/Alfonso/);
            expect(element).toBeInTheDocument();
        })
    })

    describe('renders tool page', () => {
        test('modal shows a submit button', () => {
            const handleClose = jest.fn()
            const {getByText} = render(
                <toolPage onClose={handleClose}>
                <div>test</div>
                </toolPage>
            )
            expect(getByText('test')).toBeTruthy();
            fireEvent.click(getByText(/close/i))
            expect(handleClose).toHaveBeenCalledTimes(1)
        })
    })
})