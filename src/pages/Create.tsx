import { UploadOutlined } from '@ant-design/icons'
import { DatePicker, Form, Input, Upload, Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import EnvitedButton from '@/components/EnvitedButton'
import { useAppDispatch } from '@/hooks'
import { createEvent } from '@/store/eventSlice'
import styles from './Create.module.scss'


const Create = (): JSX.Element => {
  // Not able to change Ant Design's components' color due to time limit
  // No time to handle photo upload

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const onFinish = (values: any): void => { // shouldn't be any, but due to time limit
    const { name, host, time, street, suburb, state, postcode, photo } = values

    dispatch(createEvent({
      name,
      host,
      start: time[0].format('DD MMMM h:mmA'),
      end: time[1].format('DD MMMM h:mmA'),
      location: {
        street,
        suburb,
        state,
        postcode
      },
      photo: photo ?? null
    }))

    navigate('/event', { replace: false })
  }

  return (
    <div className={styles.createPage}>
      <h1 className={styles.createTitle}>Create New Event</h1>

      <Form
        className={styles.createForm}
        size="large"
        onFinish={onFinish}
      >
        <Form.Item
          name="name"
          rules={[{ required: true }]}
        >
          <Input placeholder="Event Name" />
        </Form.Item>

        <Form.Item
          name="host"
          rules={[{ required: true }]}
        >
          <Input placeholder="Host Name" />
        </Form.Item>

        <Form.Item
          name="time"
          rules={[{ required: true }]}
        >
          <DatePicker.RangePicker
            showTime
            format="YY-MM-DD HH:mm"
          />
        </Form.Item>

        <Form.Item
          name="street"
          rules={[{ required: true }]}
        >
          <Input placeholder="Street Name" />
        </Form.Item>

        <Form.Item
          name="suburb"
          rules={[{ required: true }]}
        >
          <Input placeholder="Suburb" />
        </Form.Item>

        <div className={styles.formSp}>
          <Form.Item
            name="state"
            rules={[{ required: true }]}
          >
            <Input placeholder="State" />
          </Form.Item>

          <Form.Item
            name="postcode"
            rules={[{ required: true }]}
          >
            <Input placeholder="Postcode" />
          </Form.Item>
        </div>

        <Form.Item name="photo">
          <Upload>
            <Button icon={<UploadOutlined />}>Upload photo</Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <EnvitedButton
            button
            className={styles.createSubmit}
            htmlType="submit"
          >Next
          </EnvitedButton>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Create
