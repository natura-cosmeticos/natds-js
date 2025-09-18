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

  // ✅ LÓGICA EXTERNA - Interceptamos os callbacks existentes do componente

  return (
    <StoryContainer>
      <div style={{ fontFamily: 'Roboto, sans-serif' }}>
        <h2>Acessibilidade do Counter - Teste com VoiceOver</h2>

        {/* Live region para anúncios de mudanças */}
        <div
          aria-live="polite"
          aria-atomic="true"
          style={{
            position: 'absolute',
            width: '1px',
            height: '1px',
            overflow: 'hidden',
            clip: 'rect(0,0,0,0)',
            whiteSpace: 'nowrap',
            border: 0
          }}
        >
          {announcement}
        </div>

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
            ariaLabelInput="Quantidade atual de produtos selecionados"
            onIncrement={() => {
              setQuantity((q) => {
                const newValue = Math.min(10, q + 1)
                setAnnouncement(`Quantidade aumentada para ${newValue}`)
                setTimeout(() => setAnnouncement(''), 2000)
                return newValue
              })
            }}
            onDecrement={() => {
              setQuantity((q) => {
                const newValue = Math.max(1, q - 1)
                setAnnouncement(`Quantidade diminuída para ${newValue}`)
                setTimeout(() => setAnnouncement(''), 2000)
                return newValue
              })
            }}
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
            onIncrement={() => {
              setPersons((p) => {
                const newValue = Math.min(8, p + 1)
                const message = `Pessoa adicionada. Total: ${newValue} ${newValue === 1 ? 'pessoa' : 'pessoas'}`
                setAnnouncement(message)
                setTimeout(() => setAnnouncement(''), 2000)
                return newValue
              })
            }}
            onDecrement={() => {
              setPersons((p) => {
                const newValue = Math.max(1, p - 1)
                const message = `Pessoa removida. Total: ${newValue} ${newValue === 1 ? 'pessoa' : 'pessoas'}`
                setAnnouncement(message)
                setTimeout(() => setAnnouncement(''), 2000)
                return newValue
              })
            }}
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
            onIncrement={() => {
              setAge((a) => {
                const newValue = Math.min(100, a + 1)
                setAnnouncement(`Idade aumentada para ${newValue}`)
                setTimeout(() => setAnnouncement(''), 2000)
                return newValue
              })
            }}
            onDecrement={() => {
              setAge((a) => {
                const newValue = Math.max(18, a - 1)
                setAnnouncement(`Idade diminuída para ${newValue}`)
                setTimeout(() => setAnnouncement(''), 2000)
                return newValue
              })
            }}
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
            background: '#fff3cd',
            borderRadius: '8px'
          }}
        >
          <h4>🚀 Como Implementar em Seus Projetos:</h4>
          <pre style={{ fontSize: '14px', overflow: 'auto' }}>
            {`// Intercepte os callbacks EXISTENTES para anúncios:
<Counter
  value={quantity}
  onIncrement={() => {
    setQuantity(q => {
      const newValue = q + 1
      setAnnouncement(\`Quantidade aumentada para \${newValue}\`)
      setTimeout(() => setAnnouncement(''), 2000)
      return newValue
    })
  }}
  onDecrement={() => {
    setQuantity(q => {
      const newValue = q - 1
      setAnnouncement(\`Quantidade diminuída para \${newValue}\`)
      setTimeout(() => setAnnouncement(''), 2000)
      return newValue
    })
  }}
/>

// Adicione uma live region:
<div aria-live="polite" className="sr-only">
  {announcement}
</div>`}
          </pre>
        </div>
        </div>
      </div>
    </StoryContainer>
  )
}

export const Disabled: Story<CounterProps> = (args) => <Counter {...args} />
Disabled.args = { disabled: true }
