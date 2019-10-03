import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import chaiJestSnapshot from 'chai-jest-snapshot';

chai.use(chaiEnzyme());
chai.use(chaiJestSnapshot);
