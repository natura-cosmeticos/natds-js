/* eslint-disable max-lines */
/* eslint-disable max-len */
import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Counter, CounterProps } from '.'
import StoryContainer from '../../helpers/StoryContainer'

const componentStatus = `
> Counter Reduce input effort for fields with values that deviate little from the default by allowing users to increase or decrease the number in a single button press.

## ♿ Melhorias de Acessibilidade (v2024)
- ✅ **Elementos fantasmas eliminados** - aria-hidden aplicado em containers decorativos
- ✅ **Leitura limpa com VoiceOver** - Apenas elementos essenciais são anunciados  
- ✅ **Labels contextuais** - ariaLabel* permitem descrições específicas
- ✅ **Estados comunicados** - Limites min/max e disabled/readOnly anunciados

## 🎙️ Teste com VoiceOver
Use a story "Accessibility" para testar a experiência otimizada:
1. Ative VoiceOver (Cmd + F5)
2. Navegue com Tab pelos controles
3. Observe a leitura limpa sem elementos fantasmas

## Properties
| Property                      | Values            |    Status           |
|---                            |                ---|                  ---|
| **variant(no prop)**          | Standard          | ✅ Available        |
| **ariaLabelIncrementButton**  | string            | ✅ Available        |
| **ariaLabelDecrementButton**  | string            | ✅ Available        |
| **ariaLabelInput**            | string            | ✅ Available        |
| **disabled**                  | true/false        | ✅ Available        |
| **readOnly**                  | true/false        | ✅ Available        |
| **onChange**                  | function          | ✅ Available        |
| **label**                     | string            | ✅ Available        |
| **maxValue**                  | number            | ✅ Available        |
| **minValue**                  | number            | ✅ Available        |
| **onDecrement**               | function          | ✅ Available        |
| **onIncrement**               | function          | ✅ Available        |
| **size**                      | semiX, medium     | ✅ Available        |
| **value**                     | number            | ✅ Available        |
| **brand**                     | avon, avon_v2, natura, natura_v2, theBodyShop, <br /> consultoriaDeBeleza, casaEestilo            | ✅ Available        |

## 🌟 Exemplos de Uso Acessível

### E-commerce:
\`\`\`jsx
<Counter
  label="Quantidade"
  value={quantity}
  ariaLabelDecrementButton="Diminuir quantidade no carrinho"
  ariaLabelIncrementButton="Aumentar quantidade no carrinho"
  ariaLabelInput="Quantidade de produtos selecionados"
  onIncrement={handleIncrement}
  onDecrement={handleDecrement}
/>
\`\`\`

### Formulário:
\`\`\`jsx
<Counter
  label="Número de pessoas"
  value={persons}
  ariaLabelDecrementButton="Remover uma pessoa"
  ariaLabelIncrementButton="Adicionar uma pessoa"
  ariaLabelInput="Total de pessoas"
  onIncrement={handleIncrement}
  onDecrement={handleDecrement}
/>
\`\`\`

## Technical Usages Examples
`

export default {
  title: 'Components/Counter',
  component: Counter,
  parameters: {
    componentSubtitle: '',
    docs: { description: { component: componentStatus } },
    actions: { argTypesRegex: '^on.*' }
  }
} as Meta

export const Playground: Story<CounterProps> = ({ value, ...args }) => {
  const [amount, setAmount] = React.useState<number>(value || 0)

  const handleIncrement = () => setAmount(amount + 1)
  const handleDecrement = () => setAmount(amount - 1)
  const handleNumber = (e: string) => {
    const number = e.replace(/[^\d]/g, '')
    return Number(number)
  }
  return (
    <div>
      <Counter
        {...args}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        value={amount}
        onChange={(e) => setAmount(handleNumber(e.target.value))}
      />
    </div>
  )
}

Playground.args = { value: 0, label: 'label', readOnly: false }

export const Sizes: Story<CounterProps> = (args) => {
  const [counter1, setCounter1] = React.useState(0)
  const [counter2, setCounter2] = React.useState(0)
  return (
    <StoryContainer>
      <Counter
        {...args}
        value={counter1}
        accessibilitySpanDecrement={{ 'aria-hidden': true }}
        onIncrement={() => setCounter1(counter1 + 1)}
        onDecrement={() => setCounter1(counter1 - 1)}
      />
      <Counter
        {...args}
        size="medium"
        value={counter2}
        onIncrement={() => setCounter2(counter2 + 1)}
        onDecrement={() => setCounter2(counter2 - 1)}
        accessibilitySpanIncrement={{ 'aria-hidden': true }}
        accessibilitySpanDecrement={{ 'aria-hidden': true }}
      />
    </StoryContainer>
  )
}

/* eslint-disable */
export const Accessibility: Story<CounterProps> = () => {
  const [quantity, setQuantity] = React.useState(5)
  const [persons, setPersons] = React.useState(2)
  const [age, setAge] = React.useState(25)
  const [announcement, setAnnouncement] = React.useState('')
  
  const noop = () => undefined
  const previousQuantityRef = React.useRef(quantity)

  React.useEffect(() => {
    if (quantity !== previousQuantityRef.current) {
      const action = quantity > previousQuantityRef.current ? 'aumentada' : 'diminuída'
      setAnnouncement(`Quantidade ${action} para ${quantity}`)
      previousQuantityRef.current = quantity
    }
  }, [quantity])
  // ✅ LÓGICA EXTERNA - Interceptamos os callbacks existentes do componente

  return (
    <StoryContainer>
      <div style={{ fontFamily: 'Roboto, sans-serif' }}>
        <h2>Acessibilidade do Counter - Teste com VoiceOver</h2>

        {/* Live region para anúncios de mudanças */}
       

        <div
          style={{
            marginBottom: '2rem',
            padding: '1rem',
            background: '#f5f5f5',
            borderRadius: '8px'
          }}
        >
          <h3>📢 Como Testar:</h3>
          <ol>
          <li>Ative o VoiceOver (Cmd + F5)</li>
          <li>Use Tab para navegar entre os controles</li>
          <li>
            <strong>NOVO:</strong>
            Clique nos botões + ou - e ouça os anúncios de mudança!
          </li>
          <li>✅ Sem elementos fantasmas + ✅ Anúncios de valor!</li>
          </ol>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Exemplo 1: E-commerce */}
          <div>
          <h3>🛒 Contexto: E-commerce (COM anúncios)</h3>
          <Counter
            label="Quantidade de produtos"
            value={quantity}
            minValue={1}
            maxValue={10}
            ariaLabelDecrementButton="Diminuir quantidade de produtos no carrinho"
            ariaLabelIncrementButton="Aumentar quantidade de produtos no carrinho"
            ariaLabelInput={announcement}
            onIncrement={() => setQuantity((prev) => prev + 1)}
            onDecrement={() => setQuantity((prev) => prev - 1)}
            onChange={(e) => {
              const value = parseInt(e.target.value, 10) || 1
              setQuantity(Math.min(10, Math.max(1, value)))
            }}
          />
        </div>

        {/* Exemplo 2: Formulário */}
        <div>
          <h3>👥 Contexto: Formulário (COM anúncios)</h3>
          <Counter
            label="Número de pessoas"
            value={persons}
            minValue={1}
            maxValue={8}
            ariaLabelDecrementButton="Remover uma pessoa da reserva"
            ariaLabelIncrementButton="Adicionar uma pessoa à reserva"
            ariaLabelInput="Número total de pessoas para a reserva"
            onIncrement={() => setPersons((prev) => prev + 1)}
            onDecrement={() => setPersons((prev) => prev - 1)}
            onChange={(e) => {
              const value = parseInt(e.target.value, 10) || 1
              setPersons(Math.min(8, Math.max(1, value)))
            }}
          />
        </div>

        {/* Exemplo 3: Configuração */}
        <div>
          <h3>⚙️ Contexto: Configuração (COM anúncios)</h3>
          <Counter
            label="Idade"
            value={age}
            minValue={18}
            maxValue={100}
            ariaLabelDecrementButton="Diminuir idade"
            ariaLabelIncrementButton="Aumentar idade"
            ariaLabelInput="Idade selecionada em anos"
            onIncrement={() => setAge((prev) => prev + 1)}
            onDecrement={() => setAge((prev) => prev - 1)}
            onChange={(e) => {
              const value = parseInt(e.target.value, 10) || 18
              setAge(Math.min(100, Math.max(18, value)))
            }}
          />
        </div>

        {/* Exemplo 4: Estados especiais */}
        <div>
          <h3>🔒 Estados Especiais</h3>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Counter
              label="Desabilitado"
              value={3}
              disabled
              ariaLabelDecrementButton="Diminuir valor (desabilitado)"
              ariaLabelIncrementButton="Aumentar valor (desabilitado)"
              ariaLabelInput="Valor atual (campo desabilitado)"
              onIncrement={noop}
              onDecrement={noop}
            />

            <Counter
              label="Somente leitura"
              value={7}
              readOnly
              ariaLabelDecrementButton="Diminuir valor"
              ariaLabelIncrementButton="Aumentar valor"
              ariaLabelInput="Valor atual (somente leitura)"
              onIncrement={noop}
              onDecrement={noop}
            />
          </div>
        </div>
      </div>

        <div
          style={{
            marginTop: '2rem',
            padding: '1rem',
            background: '#e8f5e8',
            borderRadius: '8px'
          }}
        >
          <h3>✅ Melhorias Implementadas:</h3>
          <ul>
          <li>
            🚫
            <strong>
              Eliminados elementos fantasmas
            </strong>
            - Ripple containers com aria-hidden=&quot;true&quot;
          </li>
          <li>
            🚫
            <strong>
              Removidos elementos decorativos
            </strong>
            - Label container com aria-hidden=&quot;true&quot;
          </li>
          <li>
            🎯
            <strong>
              Foco apenas no essencial
            </strong>
            - VoiceOver lê apenas botões e input
          </li>
          <li>
            📢
            <strong>
              Labels contextuais
            </strong>
            - Cada botão tem descrição específica
          </li>
          <li>
            🔄
            <strong>
              Estados comunicados
            </strong>
            - Limites e estados anunciados
          </li>
          <li>
            🎙️
            <strong>
              NOVO: Anúncios de mudança
            </strong>
            - Lógica EXTERNA intercepta callbacks existentes
          </li>
        </ul>

        <div
          style={{
            marginTop: '1rem',
            padding: '1rem',
            background: '#eaf9d7',
            borderRadius: '8px'
          }}
        >
          <h4>🚀 Como Implementar em Seus Projetos:</h4>
          
          <div style={{ marginBottom: '1rem' }}>
            <h5>✨ Implementação Básica (Recomendada):</h5>
            <pre style={{ 
              fontSize: '14px', 
              overflow: 'auto', 
              background: '#0d1117',
              color: '#00ff41',
              padding: '1.5rem', 
              borderRadius: '8px',
              border: '1px solid #30363d',
              boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
              fontFamily: "'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace",
              fontWeight: '400',
              lineHeight: '1.6',
              position: 'relative'
            }}>
              {`// Use as props nativas de acessibilidade:
<Counter
  value={quantity}
  onIncrement={() => setQuantity(q => q + 1)}
  onDecrement={() => setQuantity(q => q - 1)}
  ariaLabelInput="Quantidade do produto"
  ariaLabelIncrementButton="Aumentar quantidade"
  ariaLabelDecrementButton="Diminuir quantidade"
  label="Quantidade"
/>

// ✅ O componente já tem aria-live="assertive" no input!
// ✅ Anúncios automáticos de mudanças de valor
// ✅ Labels contextuais para cada elemento`}
            </pre>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <h5>🔧 Implementação Avançada (Para casos específicos):</h5>
            <pre style={{ 
              fontSize: '14px', 
              overflow: 'auto', 
              background: '#0d1117',
              color: '#00ff41',
              padding: '1.5rem', 
              borderRadius: '8px',
              border: '1px solid #30363d',
              boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
              fontFamily: "'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace",
              fontWeight: '400',
              lineHeight: '1.6',
              position: 'relative'
            }}>
              {`// Para anúncios customizados adicionais:
const [announcement, setAnnouncement] = useState('')

<Counter
  value={quantity}
  onIncrement={() => {
    setQuantity(q => {
      const newValue = q + 1
      // Anúncio adicional se necessário
      setAnnouncement(\`Adicionado ao carrinho: \${newValue} itens\`)
      setTimeout(() => setAnnouncement(''), 3000)
      return newValue
    })
  }}
  onDecrement={() => {
    setQuantity(q => Math.max(0, q - 1))
  }}
  ariaLabelInput="Quantidade do produto"
  ariaLabelIncrementButton="Aumentar quantidade"
  ariaLabelDecrementButton="Diminuir quantidade"
/>

{/* Live region adicional apenas se necessário */}
{announcement && (
  <div aria-live="polite" className="sr-only">
    {announcement}
  </div>
)}`}
            </pre>
          </div>

          <div style={{ 
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)', 
            border: '1px solid #30363d',
            padding: '1rem', 
            borderRadius: '8px', 
            fontSize: '14px',
            color: '#e6edf3',
            boxShadow: '0 4px 16px rgba(0,0,0,0.3)'
          }}>
            <strong style={{ color: '#ffd700', fontSize: '16px' }}>💡 Dicas Importantes:</strong>
            <ul style={{ margin: '0.75rem 0', paddingLeft: '1.5rem', lineHeight: '1.6' }}>
              <li>O input já possui <code style={{ 
                background: '#21262d', 
                color: '#79c0ff', 
                padding: '2px 6px', 
                borderRadius: '4px',
                fontSize: '13px',
                fontFamily: "'JetBrains Mono', monospace"
              }}>aria-live="assertive"</code> para mudanças de valor</li>
              <li>Use sempre as props <code style={{ 
                background: '#21262d', 
                color: '#79c0ff', 
                padding: '2px 6px', 
                borderRadius: '4px',
                fontSize: '13px',
                fontFamily: "'JetBrains Mono', monospace"
              }}>ariaLabel*</code> para contexto</li>
              <li>Live regions adicionais só para feedback específico da aplicação</li>
              <li>Teste sempre com leitores de tela reais</li>
            </ul>
          </div>
        </div>
        </div>
      </div>
    </StoryContainer>
  )
}

export const Disabled: Story<CounterProps> = (args) => <Counter {...args} />
Disabled.args = { disabled: true }
